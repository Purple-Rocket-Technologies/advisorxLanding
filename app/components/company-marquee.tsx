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
    <div className="relative w-full overflow-hidden py-12 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-32 before:bg-gradient-to-r before:from-white before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-32 after:bg-gradient-to-l after:from-white after:to-transparent dark:before:from-black dark:after:from-black">
      <div className="animate-marquee flex">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center justify-center">
            {logos.map((logo, index) => (
              <motion.div
                key={`${i}-${index}`}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.7 }}
                className="flex flex-col items-center will-change-transform bg-none"
              >
                <div className=" min-w-fit w-80 h-40 relative transition-all duration-300  flex justify-center items-center bg-none overflow-hidden">
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
        ))}
      </div>
    </div>
  );
};
