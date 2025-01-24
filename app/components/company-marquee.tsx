"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const companies = [
  {
    name: "Farther",
    logo: "/logos/Farhter.svg",
  },
  {
    name: "Elevation",
    logo: "/logos/elevation.svg",
  },
  {
    name: "Firstrate",
    logo: "/logos/firstrate.svg",
  },
  {
    name: "January",
    logo: "/logos/January.svg",
  },
] as const;

export const CompanyMarquee = () => {
  return (
    <div className="w-full overflow-x-auto py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-nowrap items-center justify-center space-x-12 text-black"
      >
        {companies.map((company) => (
          <motion.div
            key={company.name}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.7 }}
            className="flex flex-col items-center gap-3 will-change-transform"
          >
            <div className="w-32 h-32 relative grayscale hover:grayscale-0 transition-all duration-300 overflow-hidden flex justify-center items-center">
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                width={15000}
                height={15000}
                className="h-[500px] w-[500px] scale-150 invert dark:invert-0 opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
