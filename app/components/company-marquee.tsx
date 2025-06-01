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

  // Duplicate the array to create seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="marquee hover:pause" style={{ "--gap": "2rem" } as React.CSSProperties}>
      <div className="track">
        {duplicatedLogos.map((logo, index) => (
          <div
            key={`${logo}-${index}`}
            className="flex-shrink-0 flex items-center justify-center h-16 w-32 px-4"
          >
            <Image
              src={`/firm/${logo}`}
              alt={`Company ${index + 1}`}
              width={120}
              height={60}
              className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
