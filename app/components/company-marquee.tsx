"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const CompanyMarquee = () => {
  const [logos, setLogos] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchLogos = async () => {
      try {
        const response = await fetch("/api/logos");
        const data = await response.json();
        console.log("Fetched logos:", data.logos);
        if (data.logos && data.logos.length > 0) {
          setLogos(data.logos);
          setIsLoaded(true);
        }
      } catch (error) {
        console.error("Failed to fetch logos:", error);
        // Fallback to sample logos if API fails
        setLogos([
          "Light Mode Logo.svg",
          "Light Mode Logo (2).svg", 
          "Light Mode Logo (3).svg",
          "Light Mode Logo (4).svg",
          "Light Mode Logo (5).svg"
        ]);
        setIsLoaded(true);
      }
    };

    fetchLogos();
  }, []);

  // Show loading state with skeleton
  if (!isLoaded) {
    return (
      <div className="w-full py-12 bg-transparent">
        <div className="flex justify-center items-center space-x-8 opacity-50">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="w-32 h-16 bg-gray-200 rounded-lg animate-pulse"
            />
          ))}
        </div>
      </div>
    );
  }

  if (logos.length === 0) {
    return (
      <div className="w-full py-12 bg-transparent">
        <div className="text-center text-gray-500">
          <p>Company logos loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full overflow-hidden py-12 bg-transparent">
      {/* Premium marquee container */}
      <div className="relative">
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10" />
        
        {/* Scrolling container */}
        <div className="flex animate-marquee-scroll hover:pause-animation">
          {/* Create multiple sets for seamless loop */}
          {Array.from({ length: 8 }, (_, setIndex) => (
            <div key={setIndex} className="flex flex-shrink-0">
              {logos.map((logo, logoIndex) => (
                <div
                  key={`${setIndex}-${logoIndex}`}
                  className="flex-shrink-0 flex items-center justify-center h-20 w-48 mx-8"
                >
                  <div className="relative group">
                    <Image
                      src={`/firm/${logo}`}
                      alt={`Company logo ${logoIndex + 1}`}
                      width={140}
                      height={70}
                      className="h-14 w-auto object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 ease-out"
                      onError={(e) => {
                        console.error(`Failed to load image: /firm/${logo}`);
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                      onLoad={() => {
                        console.log(`Successfully loaded: /firm/${logo}`);
                      }}
                      priority={setIndex === 0 && logoIndex < 3} // Priority for first few images
                    />
                    
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      
      {/* Loading indicator for debugging */}
      <div className="mt-4 text-center text-xs text-gray-400 opacity-50">
        {logos.length} company logos loaded
      </div>
    </div>
  );
};
