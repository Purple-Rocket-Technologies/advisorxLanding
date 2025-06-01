"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export const CompanyMarquee = () => {
  const [logos, setLogos] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchLogos = async () => {
      try {
        const response = await fetch("/api/logos");
        const data = await response.json();
        console.log("Fetched logos:", data.logos); // Debug log
        if (data.logos && data.logos.length > 0) {
          setLogos(data.logos);
          setIsLoaded(true);
        }
      } catch (error) {
        console.error("Failed to fetch logos:", error);
      }
    };

    fetchLogos();
  }, []);

  // Show placeholder if logos haven't loaded
  if (!isLoaded || logos.length === 0) {
    return (
      <div className="w-full py-8">
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

  // Create enough duplicates for seamless scroll
  const repeatedLogos = Array(6).fill(logos).flat();

  return (
    <div className="w-full overflow-hidden py-8 bg-transparent">
      <div 
        className="flex animate-marquee-scroll"
        style={{
          width: '600%', // 6 times for 6 repetitions
          willChange: 'transform'
        }}
      >
        {repeatedLogos.map((logo, index) => (
          <div
            key={`${logo}-${index}`}
            className="flex-shrink-0 flex items-center justify-center h-20 w-40 mx-4"
          >
            <Image
              src={`/firm/${logo}`}
              alt={`Company logo ${index + 1}`}
              width={120}
              height={60}
              className="h-12 w-auto object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              onError={(e) => {
                console.error(`Failed to load image: /firm/${logo}`);
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
