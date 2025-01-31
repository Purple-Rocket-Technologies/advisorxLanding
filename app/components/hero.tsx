import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
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
  icon: Icon,
  title,
  description,
  accentColor,
  borderColor,
  children,
}: {
  icon?: React.ElementType;
  title?: string;
  description?: string;
  accentColor: string;
  borderColor: string;
  children: React.ReactNode;
}) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="relative overflow-hidden rounded-xl border backdrop-blur-md backdrop-saturate-150 bg-white/80 dark:bg-black/20 border-gray-200/20 dark:border-white/10 min-h-[180px]"
    style={{ borderColor }}
  >
    <div className="p-5 h-full flex flex-col">
      {children}

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0.1 }}
        whileHover={{ opacity: 0.2 }}
        className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full blur-2xl"
        style={{ backgroundColor: accentColor }}
      />
      <motion.div
        initial={{ opacity: 0.1 }}
        whileHover={{ opacity: 0.2 }}
        className="absolute -left-8 -top-8 w-32 h-32 rounded-full blur-2xl"
        style={{ backgroundColor: accentColor }}
      />
    </div>
  </motion.div>
);

const BrandCard = () => (
  <motion.div
    whileHover={{ scale: 1.03, rotateX: 2, rotateY: 2 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="relative overflow-hidden rounded-2xl border backdrop-blur-xl backdrop-saturate-200 dark:bg-black bg-white border-white/10 min-h-[180px] col-span-2 row-span-2 flex items-center justify-center shadow-xl"
  >
    <div className="relative z-10 text-center space-y-4">
      <motion.h3
        className="text-4xl font-extrabold text-gray-800 dark:text-white"
        whileHover={{ scale: 1.05 }}
      >
        AdvisorX
      </motion.h3>
      <p className="dark:text-white text-gray-500 text-sm tracking-wider font-light">
        AI-Powered Content Engine
      </p>
    </div>

    {/* <motion.div
      className="absolute inset-0 "
      animate={{
        background: [
          "linear-gradient(225deg, #E6E6FF 0%, #F0E6FF 50%, #F2E6FF 100%)",
          "linear-gradient(45deg, #F2E6FF 0%, #F0E6FF 50%, #E6E6FF 100%)",
        ],
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear",
      }}
    /> */}

    {/* Glowing orbs */}
    <motion.div
      className="absolute -right-20 -top-20 w-60 h-60 rounded-full blur-3xl bg-purple-400"
      animate={{ opacity: [0.1, 0.3, 0.1] }}
      transition={{ duration: 5, repeat: Infinity }}
    />
    <motion.div
      className="absolute -left-20 -bottom-20 w-60 h-60 rounded-full blur-3xl bg-blue-800"
      animate={{ opacity: [0.3, 0.1, 0.3] }}
      transition={{ duration: 5, repeat: Infinity }}
    />
  </motion.div>
);

const FeatureShowcase = () => {
  const features = [
    {
      title: "Add Perspective",
      accentColor: "#09EF8D",
      borderColor: "#09EF8D20",
      content: (
        <div className="flex flex-col justify-between h-full gap-3">
          <div className="flex justify-end">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl px-4 py-2 text-sm max-w-[80%] bg-[#09EF8D] text-black"
            >
              Make it more authentic
            </motion.div>
          </div>
          <div className="flex justify-start">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl px-4 py-2 text-sm max-w-[80%] bg-gray-100 dark:bg-white/10"
            >
              Adding personal insights...
            </motion.div>
          </div>
        </div>
      ),
    },
    {
      title: "Content Calendar",
      accentColor: "#8987FF",
      borderColor: "#8987FF20",
      content: (
        <div className="flex flex-col justify-between h-full gap-2">
          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: 7 }).map((_, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                className={`aspect-square rounded-lg ${
                  i === 3 ? "bg-[#8987FF]" : "bg-gray-100"
                } flex items-center justify-center text-xs cursor-pointer text-gray-900`}
              >
                {i + 15}
              </motion.div>
            ))}
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-xs text-muted-foreground">LinkedIn</span>
            <span className="text-xs text-muted-foreground">Twitter</span>
          </div>
        </div>
      ),
    },
    {
      title: "Engagement Tracking",
      accentColor: "#9640FF",
      borderColor: "#9640FF20",
      content: (
        <div className="flex flex-col justify-between h-full gap-3">
          <div className="h-16 flex items-end gap-1">
            {[60, 80, 40, 90, 70, 85].map((height, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${height}%` }}
                transition={{ delay: i * 0.1 }}
                className="flex-1 bg-[#9640FF] rounded-t"
              />
            ))}
          </div>
          <div className="flex justify-between text-xs mt-2 text-muted-foreground">
            <span>Mon</span>
            <span>Sat</span>
          </div>
        </div>
      ),
    },
    {
      title: "SEC Compliance",
      accentColor: "#09EF8D",
      borderColor: "#09EF8D20",
      content: (
        <div className="flex flex-col justify-between h-full gap-3">
          <div className="flex items-center justify-between text-muted-foreground">
            <span className="text-xs">Reviewing...</span>
            <span className="text-xs">85%</span>
          </div>
          <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "85%" }}
              transition={{ duration: 1 }}
              className="h-full bg-[#09EF8D]"
            />
          </div>
          <div className="flex gap-2 mt-2">
            {["FINRA", "SEC"].map((label) => (
              <div
                key={label}
                className="px-2 py-1 rounded bg-gray-100 text-xs text-muted-foreground"
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "SEO Research",
      accentColor: "#0400F0",
      borderColor: "#0400F020",
      content: (
        <div className="flex flex-col justify-between h-full gap-3">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[#0400F0]" />
              <span className="text-xs text-muted-foreground">High Impact</span>
              <span className="text-xs font-medium">retirement planning</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-secondary-blue" />
              <span className="text-xs text-muted-foreground">Trending</span>
              <span className="text-xs font-medium">wealth management</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary-mint" />
              <span className="text-xs text-muted-foreground">Growing</span>
              <span className="text-xs font-medium">tax strategies</span>
            </div>
          </div>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>Weekly Insights</span>
            <span className="text-primary">View All →</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="mx-auto grid max-w-5xl grid-cols-2 md:grid-cols-4 gap-4">
      {/* Top Row */}
      <motion.div className="col-span-2">
        <FeatureCard {...features[0]}>{features[0].content}</FeatureCard>
      </motion.div>
      <motion.div className="col-span-2">
        <FeatureCard {...features[1]}>{features[1].content}</FeatureCard>
      </motion.div>

      {/* Middle Row with Brand */}
      <motion.div className="col-span-1">
        <FeatureCard {...features[2]}>{features[2].content}</FeatureCard>
      </motion.div>
      <motion.div className="col-span-2">
        <BrandCard />
      </motion.div>
      <motion.div className="col-span-1">
        <FeatureCard {...features[3]}>{features[3].content}</FeatureCard>
      </motion.div>

      {/* Bottom Row */}
      <motion.div className="col-span-2">
        <FeatureCard {...features[4]}>{features[4].content}</FeatureCard>
      </motion.div>
      <motion.div className="col-span-2">
        <FeatureCard {...features[0]}>{features[0].content}</FeatureCard>
      </motion.div>
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
    default: "bg-[#0400F0] text-white hover:bg-[#09EF8D]/90",
    outline: "border border-[#09EF8D]/20 hover:bg-[#09EF8D]/5",
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
            <AnimatedText text="AI Content " delay={0.2} />
            <AnimatedText text="Engine for " delay={0.4} />
            <AnimatedText text="Wealth" delay={0.6} />
            <AnimatedText text="Advisors" delay={0.8} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-2xl text-sm md:text-xl mb-8 text-secondary-purple font-medium leading-relaxed"
          >
            Attract your ideal clients with on-brand content and visuals. Stay
            FINRA + SEC compliant, schedule posts, track engagement and grow
            your reach.
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
              Try for free
            </Button>
            <Button
              variant="outline"
              className="w-full md:w-auto text-base md:text-lg px-8 py-6"
            >
              Schedule Demo
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-6 flex flex-wrap gap-4 text-sm md:text-base text-secondary-blue"
          >
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              No credit card required
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              7-day free trial
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              Cancel anytime
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
