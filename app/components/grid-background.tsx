"use client";

import { motion } from "framer-motion";

export const GridBackground = () => {
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <div className="absolute inset-0 bg-grid-small-black/[0.05] dark:bg-grid-small-white/[0.05]" />
      <div className="absolute inset-0 backdrop-blur-3xl" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"
      />
    </div>
  );
};
