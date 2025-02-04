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

const AnimatedText = ({
  text,
  delay = 0,
}: {
  text: string;
  delay?: number;
}) => (
  <>
    {text.split(" ").map((word, i) => (
      <motion.span
        key={i}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: delay + i * 0.1 }}
        className="inline-block mr-[0.08em]"
      >
        {word}
      </motion.span>
    ))}
  </>
);

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
      className={`relative rounded-xl border backdrop-blur-md bg-white/80 dark:bg-black/20 border-gray-200/20 dark:border-white/10 p-5 flex flex-col justify-between overflow-hidden ${className}`}
      style={{ borderColor: `${accentColor}20` }}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Icon className="w-6 h-6" style={{ color: accentColor }} />
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

const getCardClassName = (index: number): string => {
  switch (index) {
    case 0:
      return "col-span-2 row-span-1";
    case 1:
      return "col-span-2";
    case 2:
      return "row-span-1 col-span-2";
    case 3:
      return "row-span-1 col-span-2";
    case 4:
      return "col-span-2";
    default:
      return "";
  }
};

const FeatureShowcase = () => {
  const features = [
    {
      title: "",
      icon: MessageSquareText,
      accentColor: "#10dec5", // Changed to secondary color
      content: (
        <div className="flex flex-col gap-3">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex justify-end"
          >
            <div className="rounded-2xl px-4 py-2 text-sm max-w-[80%] bg-secondary text-black">
              Generate content about retirement planning
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex justify-start"
          >
            <div className="rounded-2xl px-4 py-2 text-sm max-w-[80%] bg-gray-100 dark:bg-white/10">
              Creating expert content...
            </div>
          </motion.div>
        </div>
      ),
    },
    {
      title: "",
      icon: Calendar,
      accentColor: "#0a504a", // Changed to primary color
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
                  ? "bg-primary text-white"
                  : "bg-gray-100 dark:bg-white/10"
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
      accentColor: "#0a504a", // Changed to primary color
      content: (
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between text-muted-foreground">
            <span className="text-xs">Reviewing...</span>
            <span className="text-xs">85%</span>
          </div>
          <div className="w-full h-2 bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "85%" }}
              transition={{ duration: 1 }}
              className="h-full bg-primary"
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
      accentColor: "#10dec5", // Changed to secondary color
      content: (
        <div className="flex flex-col gap-3">
          <div className="h-16 flex items-end gap-1">
            {[60, 80, 40, 90, 70, 85].map((height, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${height}%` }}
                transition={{ delay: i * 0.1 }}
                className="flex-1 bg-secondary rounded-t"
              />
            ))}
          </div>
          <div className="flex justify-between text-xs mt-2 text-muted-foreground">
            <span>LinkedIn</span>
            <span>Twitter</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="flex justify-center items-center h-full">
      <div className="grid grid-cols-4 grid-rows-2 gap-4 h-[500px]">
        {features.map((feature, index) => (
          <FeatureCard
            key={feature.title}
            {...feature}
            description="" // Pass empty description
            delay={index * 0.3}
            index={index}
            className={getCardClassName(index)}
          >
            {feature.content}
          </FeatureCard>
        ))}
      </div>
    </div>
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
    default: "bg-primary text-white hover:bg-secondary/90",
    outline: "border border-secondary/20 hover:bg-secondary/5",
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
  return (
    <section className="relative min-h-fit w-full px-4 py-16 md:px-6 md:py-[15vh] flex items-center max-w-[80%] mx-auto gap-12">
      <div className="w-1/2">
        {/* Header Content */}
        <div className="w-full max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <TrustedBy />
          </motion.div>

          <h1 className="text-3xl md:text-7xl font-bold mb-8 dark:text-white text-gray-900">
            <AnimatedText text="AI Marketing " delay={0.2} />
            <AnimatedText text="Manager for " delay={0.4} />
            <AnimatedText text="Wealth" delay={0.6} />
            <AnimatedText text="Advisors" delay={0.8} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-2xl text-sm md:text-xl mb-8 text-secondary-purple font-medium leading-relaxed"
          >
            Supercharge organic growth with highly personalized content that
            resonates with your ideal client. Create content, run compliance
            reviews, schedule posts & track your growth.
          </motion.p>
        </div>

        {/* CTA Section */}
        <div className="w-full max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col gap-4 md:flex-row"
          >
            <Button className="w-full md:w-auto text-base md:text-lg px-8 py-6">
              Schedule Demo
            </Button>
            <Button
              variant="outline"
              className="w-full md:w-auto text-base md:text-lg px-8 py-6 flex items-center gap-2"
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
            className="mt-6 flex flex-wrap gap-4 text-sm md:text-base text-secondary-blue"
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
      <div className="w-1/2">
        <FeatureShowcase />
      </div>
    </section>
  );
};

export default Hero;
