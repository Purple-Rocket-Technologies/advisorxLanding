"use client";

import { motion } from "framer-motion";

export const TrustedBy = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="flex items-center gap-3 mb-8 text-muted-foreground bg-[#9640FF22] rounded-xl px-4 py-2 border border-border"
    >
      <span className="text-sm font-medium tracking-wide uppercase">
        Trusted by Solo & Large RIAs
      </span>
      <div className="h-px flex-1 bg-gradient-to-r from-primary/40 via-primary/5 to-transparent" />
    </motion.div>
  );
};
