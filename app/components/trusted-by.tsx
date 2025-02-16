"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const TrustedBy = () => {
  return (
    <div className="flex items-center gap-2 mb-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-col items-start w-fit h-full gap-3 text-white rounded-xl px-4 py-2 border border-border"
      >
        <span className="text-sm text-white font-light italic tracking-wide uppercase">
          Trusted by Solo & Large RIAs
        </span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex gap-4"
      >
        <span className="text-white text-sm font-light flex items-center gap-1 rounded-xl px-4 py-1 border border-border">
          As seen on{" "}
          <Image
            src="/logos/kitces.png"
            alt="Kitces' logo"
            width={100}
            height={40}
          />
        </span>
      </motion.div>
    </div>
  );
};
