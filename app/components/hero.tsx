import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  CheckCircle,
  MessageSquareText,
  Calendar,
  BarChart2,
  ShieldCheck,
} from "lucide-react";
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

const Hero = () => {
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
              Generate content about retirement planning
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex justify-start"
          >
            <div className="rounded-2xl px-4 py-2 text-sm max-w-[80%] text-white border border-white/20 dark:bg-white/10">
              Creating expert content...
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
              className={`aspect-square rounded-lg ${
                i === 3
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
            <span className="text-xs">Reviewing...</span>
            <span className="text-xs">85%</span>
          </div>
          <div className="w-full h-1 dark:bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "85%" }}
              transition={{ duration: 1 }}
              className="h-full bg-white"
            />
          </div>
          <div className="flex gap-2 mt-2">
            {["FINRA", "SEC"].map((label) => (
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
            <span>LinkedIn</span>
            <span>Twitter</span>
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
    <section className="relative min-h-fit h-[100vh] w-full px-4 py-16 md:px-6 md:py-[15vh] flex flex-col items-center justify-center max-w-full mx-auto gap-12 overflow-hidden bg-gradient-to-br from-teal-900 via-primary to-teal-600">
      {/* Left floating features */}
      <div className="absolute left-0 bottom-1/2 translate-y-full translate-x-1/3 opacity-50  pointer-events-none">
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

      <div className="absolute left-0 top-1/4 opacity-50 translate-x-full  pointer-events-none">
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
      {/* Right floating features */}
      <div className="absolute right-0 top-1/2 translate-y-1/2 -translate-x-1/3 w-[400px] opacity-50  pointer-events-none">
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
      <div className="absolute right-0 top-1/3 -translate-y-1/2 -translate-x-1/5 opacity-50 w-[400px]  pointer-events-none">
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

      <div className="flex flex-col items-center justify-center gap-8 w-full relative z-10">
        {/* Header Content */}
        <div className="w-full max-w-3xl flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <TrustedBy />
          </motion.div>

          <h1 className="text-3xl block md:text-7xl font-bold leading-snug mb-8 dark:text-white text-white">
            AI Marketing Manager for Wealth Advisors
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-2xl text-sm md:text-xl mb-8 text-white font-light leading-relaxed"
          >
            Supercharge organic growth with highly personalized content that
            resonates with your ideal client. Create content, run compliance
            reviews, schedule posts & track your growth.
          </motion.p>
        </div>

        {/* CTA Section */}
        <div className="w-full max-w-xl flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col gap-4 md:flex-row"
          >
            <Button className="w-full md:w-auto text-black md:text-lg px-8 py-3 bg-secondary">
              Schedule Demo
            </Button>
            <Button
              variant="outline"
              className="w-full md:w-auto text-white border-4 md:text-lg px-8 py-3 flex items-center gap-2"
            >
              See it in Action
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <circle cx="12" cy="12" r="10" />
                <polygon points="10 8 16 12 10 16 10 8" />
              </svg>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-6 flex flex-wrap gap-4 text-sm  text-white"
          >
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-secondary" />
              No credit card required
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-secondary" />
              7-day free trial
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-secondary" />
              No lock-in contracts
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
