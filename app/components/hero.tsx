import React, { useRef, useEffect, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  CheckCircle,
  MessageSquareText,
  Calendar,
  BarChart2,
  ShieldCheck,
  Star,
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
      className={`relative rounded-xl border backdrop-blur-md dark:bg-black/20 p-5 flex flex-col justify-between overflow-hidden ${className} border-white/20`}
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
  const baseStyles = "font-medium rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95";
  const variants = {
    default: "bg-secondary hover:bg-secondary/90 shadow-lg hover:shadow-xl text-black",
    outline: "border-2 border-white/30 hover:border-white/50 backdrop-blur-lg hover:bg-white/10 text-white",
  };

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

const CleanAnimatedProfession = () => {
  const professions = [
    "Financial Advisors",
    "Commercial Insurance Agents", 
    "CPAs & Fractional CFOs",
    "Estate Planning Attorneys",
    "SBA Lenders",
    "Service Professionals"
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % professions.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [professions.length]);

  return (
    <div className="relative h-16 md:h-20 lg:h-24 w-full flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ 
            opacity: 0, 
            y: 20
          }}
          animate={{ 
            opacity: 1, 
            y: 0
          }}
          exit={{ 
            opacity: 0, 
            y: -20
          }}
          transition={{ 
            duration: 0.5,
            ease: "easeInOut"
          }}
          className="absolute inset-0 flex items-center justify-center text-center px-4"
        >
          <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-white leading-tight tracking-tight whitespace-nowrap">
            {professions[currentIndex]}
          </span>
        </motion.div>
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
  
  // Profession cycling state
  const professions = [
    "Financial Advisors",
    "Commercial Insurance Agents", 
    "CPAs & Fractional CFOs",
    "Estate Planning Attorneys",
    "SBA Lenders",
    "Service Professionals"
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % professions.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [professions.length]);

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
            <div className="rounded-2xl px-4 py-2 text-sm max-w-[80%] text-white border border-secondary/50 bg-secondary/10 backdrop-blur-sm">
              Find local business owners in Austin
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex justify-start"
          >
            <div className="rounded-2xl px-4 py-2 text-sm max-w-[80%] text-white border border-white/20 bg-white/10 backdrop-blur-sm">
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
                ? "border-2 border-secondary text-white bg-secondary/20"
                : "border border-white/20 text-white bg-white/10"
                } flex items-center justify-center text-xs backdrop-blur-sm`}
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
            <span className="text-xs font-bold">94%</span>
          </div>
          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "94%" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-secondary to-primary rounded-full"
            />
          </div>
          <div className="flex gap-2 mt-2">
            {["CAN-SPAM", "GDPR"].map((label) => (
              <div
                key={label}
                className="px-2 py-1 rounded bg-white/10 backdrop-blur-sm text-xs text-white border border-white/20"
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
                transition={{ delay: i * 0.1, duration: 0.8, ease: "easeOut" }}
                className="flex-1 bg-gradient-to-t from-secondary to-primary rounded-t backdrop-blur-sm"
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
      className="relative min-h-screen w-full px-4 py-12 md:px-6 md:py-20 lg:py-24 flex flex-col items-center justify-center max-w-full mx-auto gap-8 md:gap-16 overflow-hidden bg-gradient-to-br from-teal-900 via-primary to-teal-600"
    >
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      
      {/* Floating elements - hidden on mobile for performance */}
      <div className="hidden xl:block absolute left-0 bottom-1/2 translate-y-full translate-x-[10%] 2xl:translate-x-[20%] opacity-30 pointer-events-none">
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

      <div className="hidden xl:block absolute left-0 top-1/4 translate-x-[50%] 2xl:translate-x-[75%] opacity-30 pointer-events-none">
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

      <div className="hidden xl:block absolute right-0 top-1/2 translate-y-1/2 -translate-x-[10%] 2xl:-translate-x-[20%] w-[400px] opacity-30 pointer-events-none">
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

      <div className="hidden xl:block absolute right-0 top-1/3 -translate-y-1/2 -translate-x-[50%] opacity-30 w-[400px] pointer-events-none">
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

      <div className="flex flex-col items-center justify-center gap-6 md:gap-12 w-full relative z-10">
        {/* Header Content */}
        <div className="w-full max-w-7xl flex flex-col items-center text-center px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-fit mb-8 md:mb-12"
          >
            <TrustedBy />
          </motion.div>

          {/* Enhanced main heading with premium styling */}
          <div className="mb-8 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="mb-6 md:mb-8"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight md:leading-tight">
                <span className="bg-gradient-to-r from-white via-white to-white/90 bg-clip-text text-transparent">
                  Automating local growth for
                </span>
              </h1>
            </motion.div>
            
            {/* Profession cycling with enhanced styling */}
            <div className="w-full mb-4 md:mb-6">
              <div className="relative h-16 md:h-20 lg:h-24 xl:h-28 w-full flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ 
                      opacity: 0, 
                      y: 20,
                      scale: 0.98
                    }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      scale: 1
                    }}
                    exit={{ 
                      opacity: 0, 
                      y: -20,
                      scale: 0.98
                    }}
                    transition={{ 
                      duration: 0.6,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 flex items-center justify-center text-center px-4"
                  >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight tracking-tight">
                      <span className="bg-gradient-to-r from-secondary via-cyan-400 to-primary bg-clip-text text-transparent drop-shadow-lg">
                        {professions[currentIndex]}
                      </span>
                    </h2>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Enhanced accent line */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              className="mx-auto w-32 md:w-48 h-1 bg-gradient-to-r from-secondary via-cyan-400 to-primary rounded-full"
            />
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="max-w-5xl mb-12 md:mb-16"
          >
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 font-light leading-relaxed px-4 md:px-0">
              Our AI sales agent automates lead generation and marketing to local business owners — save 10+ hours every week and replace your expensive lead gen agencies.
            </p>
          </motion.div>
        </div>
        
        {/* CTA Section with premium styling */}
        <div className="w-full max-w-xl flex flex-col items-center justify-center px-4 md:px-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full mb-8"
          >
            <Button className="w-full sm:w-auto text-base md:text-lg px-8 md:px-10 py-4 md:py-5 font-semibold">
              Schedule Demo
            </Button>
            <Button
              variant="outline"
              className="w-full sm:w-auto text-base md:text-lg px-8 md:px-10 py-4 md:py-5 flex items-center justify-center gap-3 font-medium"
            >
              See it in Action
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
                whileHover={{ scale: 1.1 }}
              >
                <circle cx="12" cy="12" r="10" />
                <polygon points="10 8 16 12 10 16 10 8" />
              </motion.svg>
            </Button>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex gap-4 mb-8"
          >
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
              <span className="text-sm md:text-base text-white/90 font-light italic">
                As seen on
              </span>
              <Image
                src="/logos/kitces.png"
                alt="Kitces' logo"
                width={80}
                height={32}
                className="h-6 w-auto"
              />
            </div>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-sm md:text-base text-white/90"
          >
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center">
                <CheckCircle className="w-3 h-3 text-primary" />
              </div>
              <span>60-day money back guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center">
                <CheckCircle className="w-3 h-3 text-primary" />
              </div>
              <span>No lock-in contracts</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
