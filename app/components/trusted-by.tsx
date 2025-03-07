"use client";

import { motion } from "framer-motion";

export const TrustedBy = () => {
  return (
    <div className="flex items-center gap-2 mb-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-col items-start w-fit h-full gap-3 text-white rounded-xl px-4 py-2 border border-border"
      >
        <span className="text-xs md:text-sm text-white font-light italic tracking-wide">
          TRUSTED BY SOLO & LARGE RIAs
        </span>
      </motion.div>
    </div>
  );
};