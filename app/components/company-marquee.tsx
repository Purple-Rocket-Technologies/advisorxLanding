"use client";

import { motion } from "framer-motion";

const companies = [
  {
    name: "Morgan Stanley",
    logo: "/logos/morgan-stanley.svg",
  },
  {
    name: "Goldman Sachs",
    logo: "/logos/goldman-sachs.svg",
  },
  {
    name: "JP Morgan",
    logo: "/logos/jp-morgan.svg",
  },
  {
    name: "UBS",
    logo: "/logos/ubs.svg",
  },
  {
    name: "Merrill Lynch",
    logo: "/logos/merrill-lynch.svg",
  },
] as const;

export const CompanyMarquee = () => {
  return (
    <div className="w-full overflow-hidden py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8 text-muted-foreground"
      >
        {companies.map((company) => (
          <motion.div
            key={company.name}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center gap-3"
          >
            <div className="w-12 h-12 relative grayscale hover:grayscale-0 transition-all duration-300">
              <img
                src={company.logo}
                alt={company.name}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-sm font-medium">{company.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
