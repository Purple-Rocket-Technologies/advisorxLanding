"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export const CompanyMarquee = () => {
  const [logos, setLogos] = useState<string[]>([]);

  useEffect(() => {
    const fetchLogos = async () => {
      try {
        const response = await fetch("/api/logos");
        const data = await response.json();
        setLogos(data.logos || []);
      } catch (error) {
        console.error("Failed to fetch logos:", error);
      }
    };

    fetchLogos();
  }, []);

  // Duplicate the array multiple times to create seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="w-full overflow-hidden bg-transparent py-8">
      <div className="flex animate-marquee-scroll">
        {duplicatedLogos.map((logo, index) => (
          <div
            key={`${logo}-${index}`}
            className="flex-shrink-0 flex items-center justify-center h-20 w-40 mx-6"
          >
            <Image
              src={`/firm/${logo}`}
              alt={`Company ${index + 1}`}
              width={150}
              height={80}
              className="h-16 w-auto object-contain filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
