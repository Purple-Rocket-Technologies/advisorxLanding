import React, { useRef, useEffect, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  CheckCircle,
  MessageSquareText,
  Calendar,
  BarChart2,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import { TrustedBy } from "./trusted-by";

const FeatureCard = ({
  title,
  description,
  icon: Icon,
  accentColor,
  children,
  className = "",
  delay,
}: {
  title: string;
  description: string;
  icon: React.ElementType;
  accentColor: string;
  children: React.ReactNode;
  className?: string;
  delay: number;
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.7, delay: delay }}
      whileHover={{ scale: 1.02 }}
      className={`relative rounded-xl border backdrop-blur-md  dark:bg-black/20  p-5 flex flex-col justify-between overflow-hidden ${className} border-white/20`}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Icon className="w-6 h-6 stroke-white" />
            <h3 className="text-lg font-semibold">{title}</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {description}
          </p>
        </div>
      </div>

      {children}

      <motion.div
        initial={{ opacity: 0.1 }}
        whileHover={{ opacity: 0.2 }}
        className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full blur-2xl"
        style={{ backgroundColor: accentColor }}
      />
    </motion.div>
  );
};

const Button = ({
  children,
  variant = "default",
  className = "",
  ...props
}: {
  children: React.ReactNode;
  variant?: "default" | "outline";
  className?: string;
}) => {
  const baseStyles = "font-medium rounded-lg transition-all duration-300";
  const variants = {
    default: "bg-primary hover:bg-secondary/90",
    outline: "border border-secondary hover:bg-secondary/5",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const AnimatedProfession = () => {
  const professions = [
    "Financial Advisors",
    "Commercial Insurance Agents", 
    "CPAs & Fractional CFOs",
    "Estate Planning Attorneys",
    "SBA Lenders"
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % professions.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [professions.length]);

  return (
    <div className="relative h-20 flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ 
            duration: 0.5,
            ease: "easeInOut"
          }}
          className="absolute whitespace-nowrap text-4xl md:text-5xl lg:text-6xl font-extrabold text-white"
        >
          {professions[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

const Hero = ({
  onHeightChange,
}: {
  onHeightChange: (height: number) => void;
}) => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateHeight = () => {
      if (heroRef.current) {
        const height = heroRef.current.offsetHeight;
        onHeightChange(height);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [onHeightChange]);

  const features = [
    {
      title: "",
      icon: MessageSquareText,
      accentColor: "#10dec5",
      content: (
        <div className="flex flex-col gap-3">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex justify-end"
          >
            <div className="rounded-2xl px-4 py-2 text-sm max-w-[80%]  text-white border border-secondary">
              Find local business owners in Austin
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex justify-start"
          >
            <div className="rounded-2xl px-4 py-2 text-sm max-w-[80%] text-white border border-white/20 dark:bg-white/10">
              Scraping 2,847 leads...
            </div>
          </motion.div>
        </div>
      ),
    },
    {
      title: "",
      icon: Calendar,
      accentColor: "#0a504a",
      content: (
        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: 7 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5 + i * 0.1, duration: 0.3 }}
              className={`aspect-square rounded-lg ${i === 3
                ? "border-2 border-secondary text-white"
                : "border border-white/20 text-white dark:bg-white/10"
                } flex items-center justify-center text-xs`}
            >
              {i + 15}
            </motion.div>
          ))}
        </div>
      ),
    },
    {
      title: "",
      icon: ShieldCheck,
      accentColor: "#0a504a",
      content: (
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between text-white">
            <span className="text-xs">Email deliverability...</span>
            <span className="text-xs">94%</span>
          </div>
          <div className="w-full h-1 dark:bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "94%" }}
              transition={{ duration: 1 }}
              className="h-full bg-white"
            />
          </div>
          <div className="flex gap-2 mt-2">
            {["CAN-SPAM", "GDPR"].map((label) => (
              <div
                key={label}
                className="px-2 py-1 rounded bg-gray-100 dark:bg-white/10 text-xs text-muted-foreground"
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "",
      icon: BarChart2,
      accentColor: "#10dec5",
      content: (
        <div className="flex flex-col gap-3">
          <div className="h-16 flex items-end gap-1">
            {[60, 80, 40, 90, 70, 85].map((height, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${height}%` }}
                transition={{ delay: i * 0.1 }}
                className="flex-1 bg-white/20 rounded-t"
              />
            ))}
          </div>
          <div className="flex justify-between text-xs mt-2 text-white">
            <span>Open Rate</span>
            <span>Reply Rate</span>
          </div>
        </div>
      ),
    },
  ];

  const leftFeature1 = features.slice(0, 1);
  const leftFeature2 = features.slice(1, 2);
  const rightFeature1 = features.slice(2, 3);
  const rightFeature2 = features.slice(3, 4);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[100vh] w-full px-4 py-8 md:px-6 md:py-[15vh] flex flex-col items-center justify-center max-w-full mx-auto gap-6 md:gap-12 overflow-hidden bg-gradient-to-br from-teal-900 via-primary to-teal-600"
    >
      {/* Left floating features - Show from 1200px and adjust position till 1620px */}
      <div className="hidden min-[1200px]:block absolute left-0 bottom-1/2 translate-y-full translate-x-[10%] xl:translate-x-[20%] min-[1620px]:translate-x-1/3 opacity-30 pointer-events-none">
        {leftFeature1.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + index * 0.2, duration: 0.8 }}
          >
            <FeatureCard
              {...feature}
              description=""
              delay={0}
              index={index}
              className="transform scale-75"
            >
              {feature.content}
            </FeatureCard>
          </motion.div>
        ))}
      </div>

      <div className="  left-0 hidden min-[1200px]:block absolute min-[1200px]:-left-[200px] top-1/4 translate-x-[50%] xl:translate-x-[75%] min-[1620px]:translate-x-full opacity-30 pointer-events-none">
        {leftFeature2.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + index * 0.2, duration: 0.8 }}
          >
            <FeatureCard
              {...feature}
              description=""
              delay={0}
              index={index + 2}
              className="transform scale-75"
            >
              {feature.content}
            </FeatureCard>
          </motion.div>
        ))}
      </div>

      {/* Right floating features - Show from 1200px and adjust position till 1620px */}
      <div className="hidden min-[1200px]:block absolute right-0 top-1/2 translate-y-1/2 -translate-x-[10%] xl:-translate-x-[20%] min-[1620px]:-translate-x-1/3 w-[400px] opacity-30 pointer-events-none">
        {rightFeature1.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 + index * 0.2, duration: 0.8 }}
          >
            <FeatureCard
              {...feature}
              description=""
              delay={0}
              index={index + 2}
              className="transform scale-75"
            >
              {feature.content}
            </FeatureCard>
          </motion.div>
        ))}
      </div>
      <div className="hidden min-[1200px]:block absolute min-[1200px]:-right-[400px] min-[1500px]:-right-[200px] top-1/3 -translate-y-1/2 translate-x-[200%] xl:-translate-x-[50%] min-[2020px]:right-0 opacity-30 w-[400px] pointer-events-none">
        {rightFeature2.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 + index * 0.2, duration: 0.8 }}
          >
            <FeatureCard
              {...feature}
              description=""
              delay={0}
              index={index + 2}
              className="transform scale-75"
            >
              {feature.content}
            </FeatureCard>
          </motion.div>
        ))}
      </div>

      <div className="flex flex-col items-center justify-center gap-4 md:gap-8 w-full relative z-10">
        {/* Header Content */}
        <div className="w-full max-w-5xl flex flex-col items-center text-center px-4 md:px-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-fit"
          >
            <TrustedBy />
          </motion.div>

          <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight md:leading-snug mb-4 md:mb-8 dark:text-white text-white">
            <div className="mb-2">
              <span>Automating local business growth</span>
            </div>
            <div className="flex items-center justify-center gap-2 md:gap-4">
              <span>for</span>
              <div className="min-w-fit">
                <AnimatedProfession />
              </div>
            </div>
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-2xl text-sm md:text-lg lg:text-xl mb-6 md:mb-8 text-white font-light leading-relaxed px-4 md:px-0"
          >
            Completely automated lead generation and marketing to local business owners. Fully done for you on auto-pilot - save 10+ hours every week and replace your expensive lead gen agencies.
          </motion.p>
        </div>
        
        {/* CTA Section */}
        <div className="w-fit max-w-xl flex flex-col items-center justify-center px-4 md:px-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col gap-3 md:flex-row items-center justify-center md:gap-4 w-full"
          >
            <Button className="w-full md:w-auto text-black text-sm md:text-lg px-6 md:px-8 py-2.5 md:py-3 bg-secondary">
              Schedule Demo
            </Button>
            <Button
              variant="outline"
              className="w-full md:w-auto text-white backdrop-blur-lg border-2 md:border-4 text-sm md:text-lg px-6 md:px-8 py-2.5 md:py-3 flex items-center justify-center gap-2"
            >
              See it in Action
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 md:w-5 md:h-5"
              >
                <circle cx="12" cy="12" r="10" />
                <polygon points="10 8 16 12 10 16 10 8" />
              </svg>
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex gap-4 mt-8"
          >
            <span className=" text-lg font-light italic text-gray-300 flex items-center gap-1 rounded-xl px-4 py-1 ">
              As seen on{" "}
              <Image
                src="/logos/kitces.png"
                alt="Kitces' logo"
                width={100}
                height={40}
              />
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="mt-8 flex flex-wrap justify-center gap-3 md:gap-4 text-xs md:text-sm text-white"
          >
            <span className="flex items-center gap-1.5 md:gap-2">
              <CheckCircle className="w-3.5 h-3.5 md:w-4 md:h-4 text-secondary" />
              60-day money back guarantee
            </span>
            <span className="flex items-center gap-1.5 md:gap-2">
              <CheckCircle className="w-3.5 h-3.5 md:w-4 md:h-4 text-secondary" />
              No lock-in contracts
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
