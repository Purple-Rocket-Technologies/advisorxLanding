"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  LineChart,
  BarChart,
  MessageSquare,
  Bot,
  Shield,
  BookOpen,
  Youtube,
  ArrowRight,
} from "lucide-react";

const cardsData = [
  {
    title: "SEO Agent",
    category: "Content Research",
    description:
      "Automatically runs primary, secondary and long-tail keyword research with ready-to-publish blog content",
    icon: <BarChart className="w-8 h-8 text-primary" />,
    color: "text-primary",
    bgColor: "bg-primary",
  },
  {
    title: "LinkedIn Agent",
    category: "Social Media",
    description:
      "Creates on-brand opening hooks and content for LinkedIn that align with your brand philosophy",
    icon: <LineChart className="w-8 h-8 text-blue-500" />,
    color: "text-blue-500",
    bgColor: "bg-blue-500",
  },
  {
    title: "YouTube Transcripts",
    category: "Video Content",
    description:
      "Generate transcripts for your firm for both short-form and long-form videos",
    icon: <Youtube className="w-8 h-8 text-rose-500" />,
    color: "text-rose-500",
    bgColor: "bg-rose-500",
  },
  {
    title: "Client FAQ Bot",
    category: "Lead Generation",
    description:
      "Turn your website into a lead generation tool with a compliant bot to answer common queries",
    icon: <Bot className="w-8 h-8 text-green-500" />,
    color: "text-green-500",
    bgColor: "bg-green-500",
  },
  {
    title: "Compliance Agent",
    category: "Risk Management",
    description:
      "Run thorough marketing compliance reviews saving compliance teams 10+ hours every week",
    icon: <Shield className="w-8 h-8 text-amber-500" />,
    color: "text-amber-500",
    bgColor: "bg-amber-500",
  },
  {
    title: "Blog Agent",
    category: "Content Creation",
    description:
      "Create blog content that align with your firm's brand and investment philosophy",
    icon: <BookOpen className="w-8 h-8 text-pink-500" />,
    color: "text-pink-500",
    bgColor: "bg-pink-500",
  },
] as const;

const FeatureCard = React.memo(
  ({
    card,
    y,
    opacity,
  }: {
    card: (typeof cardsData)[number];
    y: any;
    opacity: any;
  }) => (
    <motion.div
      style={{
        y,
        opacity,
        transform: "translate3d(0,0,0)",
        willChange: "transform, opacity",
      }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 100,
        duration: 1.2,
      }}
      className="transform-gpu h-full"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div
        className="rounded-xl border border-border/50 bg-card/30 backdrop-blur-xl backdrop-saturate-150 transition-all duration-500 transform-gpu will-change-transform overflow-hidden h-full hover:bg-card/50 hover:border-primary/20 group"
        style={{
          boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="p-8 flex flex-col h-full relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-bl-[100px] -z-10 transition-opacity duration-500 opacity-0 group-hover:opacity-100" />

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-muted/80 transition-colors duration-300 group-hover:bg-primary/10 group-hover:text-primary">
                {card.icon}
              </div>
              <h3
                className={`text-2xl font-bold transition-colors duration-300 group-hover:${card.color}`}
              >
                {card.title}
              </h3>
            </div>
            <motion.div
              initial={{ scale: 0.5, opacity: 0.5 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                duration: 0.5,
              }}
              className={`w-2 h-2 rounded-full ${card.bgColor} opacity-40 group-hover:opacity-80 transition-opacity duration-300`}
            />
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl rounded-xl" />
            <p className="text-muted-foreground text-lg leading-relaxed flex-grow relative">
              {card.description}
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-border/30 flex items-center justify-between opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            <span className="text-sm text-muted-foreground">
              {card.category}
            </span>
            <ArrowRight className="w-5 h-5 text-primary transform group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </motion.div>
  )
);

FeatureCard.displayName = "FeatureCard";

const AppleStyleDashboard = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "center center"],
  });

  return (
    <div
      ref={containerRef}
      className="w-full min-h-fit relative py-32 transform-gpu"
      style={{ transform: "translate3d(0,0,0)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 flex flex-col items-center justify-center gap-6"
        >
          <div className="inline-block">
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
                delay: 0.2,
              }}
              className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
            >
              Features
            </motion.span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 100,
              duration: 1.2,
              delay: 0.2,
            }}
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-foreground to-foreground/60 bg-clip-text text-transparent"
          >
            AI Marketing Agents
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 100,
              duration: 1.2,
              delay: 0.4,
            }}
            className="text-muted-foreground text-xl max-w-2xl mx-auto"
          >
            Streamline your marketing operations with intelligent automation
          </motion.p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {cardsData.map((card, index) => {
            const columnPosition = index % 3;
            const start = columnPosition * 0.15;
            const end = start + 0.25;
            const y = useTransform(scrollYProgress, [start, end], [120, 0]);
            const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
            return (
              <FeatureCard
                key={card.title}
                card={card}
                y={y}
                opacity={opacity}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AppleStyleDashboard;
