"use client";

import { motion } from "framer-motion";

export const TrustedBy = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="flex flex-col items-start w-fit h-fit gap-3 mb-8 text-muted-foreground  rounded-xl px-4 py-2 border border-border"
    >
      <span className="text-sm text-white font-light italic tracking-wide uppercase">
        Trusted by Solo & Large RIAs
      </span>
    </motion.div>
  );
};
