"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const CompanyMarquee = () => {
  const [logos, setLogos] = useState<string[]>([]);

  useEffect(() => {
    const fetchLogos = async () => {
      const response = await fetch("/api/logos");
      const data = await response.json();
      console.log(data);
      setLogos(data.logos);
    };

    fetchLogos();
  }, []);

  return (
    <div className="marquee">
      <div className="track">
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.7 }}
            className="flex flex-col items-center will-change-transform bg-none"
          >
            <div className="min-w-fit w-80 h-40 relative transition-all duration-300 flex justify-center items-center bg-none overflow-hidden">
              <Image
                src={`/firm/${logo}`}
                alt={`Company logo ${index + 1}`}
                width={15000}
                height={15000}
                className="w-[300px] bg-none dark:invert-0 opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          </motion.div>
        ))}
      </div>
      <div className="track" aria-hidden="true">
        {logos.map((logo, index) => (
          <motion.div
            key={`clone-${index}`}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.7 }}
            className="flex flex-col items-center will-change-transform bg-none"
          >
            <div className="min-w-fit w-80 h-40 relative transition-all duration-300 flex justify-center items-center bg-none overflow-hidden">
              <Image
                src={`/firm/${logo}`}
                alt={`Company logo ${index + 1}`}
                width={15000}
                height={15000}
                className="w-[300px] bg-none dark:invert-0 opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
