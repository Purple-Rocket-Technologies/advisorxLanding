"use client";

import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Intelligent Knowledge Base",
    description:
      "Our AI creates deep connections between your firm's data automatically. This ensures more accurate content generation by understanding the complex relationships within your practice.",
    ui: {
      type: "search",
      placeholder: "Search knowledge base...",
      items: ["Investment Strategy", "Market Analysis", "Client Portfolio"],
      bgColor: "bg-card/50",
      borderColor: "border-blue-200/20",
      accentColor: "bg-blue-500",
    },
  },
  {
    title: "Agent Builder",
    description:
      "Create custom AI agents tailored to your specific needs. Get specialized support for ongoing customization and fine-tuning to match your unique requirements.",
    ui: {
      type: "toggle",
      label: "Agent Settings",
      options: ["Basic", "Advanced", "Expert"],
      bgColor: "bg-card/50",
      borderColor: "border-emerald-200/20",
      accentColor: "bg-emerald-500",
    },
  },
  {
    title: "Dynamic Prompt Library",
    description:
      "Access a comprehensive library of pre-built prompts designed for wealth management. Customize and save your own prompts for consistent content creation.",
    ui: {
      type: "select",
      label: "Select Template",
      options: ["Market Update", "Portfolio Review", "Investment Thesis"],
      bgColor: "bg-card/50",
      borderColor: "border-purple-200/20",
      accentColor: "bg-purple-500",
    },
  },
  {
    title: "Post Scheduling",
    description:
      "Schedule and automate your social media presence across all platforms. Track performance with detailed analytics and engagement metrics.",
    ui: {
      type: "calendar",
      label: "Schedule Post",
      platforms: ["LinkedIn", "Twitter", "Instagram"],
      bgColor: "bg-card/50",
      borderColor: "border-amber-200/20",
      accentColor: "bg-amber-500",
    },
  },
  {
    title: "Bot Builder",
    description:
      "Create secure, compliant chatbots to handle common client queries. Deploy across your digital channels for 24/7 prospect engagement.",
    ui: {
      type: "chat",
      messages: [
        { text: "Hello! How can I help?", type: "bot" },
        { text: "I'd like to learn more", type: "user" },
      ],
      bgColor: "bg-card/50",
      borderColor: "border-rose-200/20",
      accentColor: "bg-rose-500",
    },
  },
  {
    title: "Document Parsing",
    description:
      "Automatically analyze and extract insights from financial documents. Generate summaries and reports with key findings highlighted.",
    ui: {
      type: "upload",
      label: "Upload Document",
      status: "Processing...",
      progress: 65,
      bgColor: "bg-card/50",
      borderColor: "border-indigo-200/20",
      accentColor: "bg-indigo-500",
    },
  },
] as const;

const FeatureCard = React.memo(
  ({ feature }: { feature: (typeof features)[number] }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group flex flex-col items-start"
    >
      {/* UI Component Illustration */}
      <div className="mb-6 w-full">
        <motion.div
          whileHover={{
            scale: 1.05,
            rotateY: 5,
            rotateX: 5,
            transition: { duration: 0.3, ease: "easeOut" },
          }}
          whileTap={{ scale: 0.95 }}
          className={`w-full aspect-[4/3] rounded-xl border ${feature.ui.borderColor} ${feature.ui.bgColor} p-6 flex flex-col gap-4 transition-all duration-300 overflow-hidden relative backdrop-blur-md backdrop-saturate-150 hover:shadow-2xl hover:border-opacity-50 hover:backdrop-saturate-200 group cursor-pointer`}
        >
          {/* Different UI based on type */}
          {feature.ui.type === "search" && (
            <motion.div
              initial={{ opacity: 1 }}
              className="flex flex-col gap-3"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-2 p-3 bg-background/80 rounded-lg border border-border"
              >
                <div className="w-4 h-4 rounded-full border-2 border-muted-foreground" />
                <div className="text-sm text-muted-foreground">
                  {feature.ui.placeholder}
                </div>
              </motion.div>
              <div className="flex flex-col gap-2">
                {feature.ui.items.map((item, index) => (
                  <motion.div
                    key={item}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-2 p-3 bg-background/60 rounded-lg"
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${feature.ui.accentColor}`}
                    />
                    <span className="text-sm text-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {feature.ui.type === "toggle" && (
            <motion.div
              initial={{ opacity: 1 }}
              className="flex flex-col gap-4"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-foreground">
                  {feature.ui.label}
                </span>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-6 rounded-full ${feature.ui.accentColor} cursor-pointer flex items-center justify-start px-1`}
                >
                  <div className="w-4 h-4 rounded-full bg-white transform" />
                </motion.div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {feature.ui.options.map((option) => (
                  <motion.div
                    key={option}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-2 text-center text-sm rounded-lg cursor-pointer ${
                      option === "Advanced"
                        ? feature.ui.accentColor + " text-white"
                        : "bg-background/60 text-foreground hover:bg-background/80"
                    }`}
                  >
                    {option}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {feature.ui.type === "select" && (
            <motion.div
              initial={{ opacity: 1 }}
              className="flex flex-col gap-2"
            >
              <div className="text-sm font-medium text-foreground mb-2">
                {feature.ui.label}
              </div>
              <div className="flex flex-col gap-2">
                {feature.ui.options.map((option, index) => (
                  <motion.div
                    key={option}
                    whileHover={{ x: 10 }}
                    className={`p-3 rounded-lg flex items-center gap-3 cursor-pointer ${
                      index === 0
                        ? "bg-background/80 border border-border"
                        : "bg-background/60"
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 180 }}
                      className={`w-4 h-4 rounded-full border-2 ${
                        index === 0
                          ? "border-" +
                            feature.ui.accentColor.split("-")[1] +
                            "-500"
                          : "border-muted-foreground"
                      }`}
                    >
                      {index === 0 && (
                        <div
                          className={`w-2 h-2 rounded-full ${feature.ui.accentColor} m-0.5`}
                        />
                      )}
                    </motion.div>
                    <span className="text-sm text-foreground">{option}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {feature.ui.type === "calendar" && (
            <motion.div
              initial={{ opacity: 1 }}
              className="flex flex-col gap-4"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-foreground">
                  {feature.ui.label}
                </span>
                <div className="flex gap-2">
                  {feature.ui.platforms.map((platform) => (
                    <motion.div
                      key={platform}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      className="w-6 h-6 rounded-full bg-background/60 flex items-center justify-center text-xs cursor-pointer"
                    >
                      {platform[0]}
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: 7 }).map((_, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`aspect-square rounded-lg ${
                      i === 3 ? feature.ui.accentColor : "bg-background/60"
                    } flex items-center justify-center text-xs cursor-pointer`}
                  >
                    {i + 15}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {feature.ui.type === "chat" && (
            <motion.div
              initial={{ opacity: 1 }}
              className="flex flex-col gap-3"
            >
              {feature.ui.messages.map((msg, i) => (
                <motion.div
                  key={i}
                  className={`flex ${
                    msg.type === "bot" ? "justify-start" : "justify-end"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`rounded-2xl px-4 py-2 text-sm max-w-[80%] ${
                      msg.type === "bot"
                        ? "bg-background/80 text-foreground"
                        : feature.ui.accentColor + " text-white"
                    }`}
                  >
                    {msg.text}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {feature.ui.type === "upload" && (
            <motion.div
              initial={{ opacity: 1 }}
              className="flex flex-col gap-4"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-foreground">
                  {feature.ui.label}
                </span>
                <span className="text-xs text-muted-foreground">
                  {feature.ui.status}
                </span>
              </div>
              <div className="w-full h-2 bg-background/60 rounded-full overflow-hidden">
                <div
                  className={`h-full ${feature.ui.accentColor}`}
                  style={{ width: `${feature.ui.progress}%` }}
                />
              </div>
              <motion.div
                whileHover={{
                  scale: 1.02,
                  borderColor: feature.ui.accentColor.split(" ")[1],
                }}
                className="flex items-center justify-center p-8 border-2 border-dashed border-border rounded-lg mt-4 cursor-pointer"
              >
                <span className="text-sm text-muted-foreground">
                  Drop files here or click to upload
                </span>
              </motion.div>
            </motion.div>
          )}

          {/* Common Decorative Elements */}
          <motion.div
            initial={{ opacity: 0.1 }}
            whileHover={{ opacity: 0.2, scale: 1.2 }}
            transition={{ duration: 0.3 }}
            className={`absolute -right-8 -bottom-8 w-32 h-32 rounded-full ${feature.ui.accentColor} blur-2xl`}
          />
          <motion.div
            initial={{ opacity: 0.1 }}
            whileHover={{ opacity: 0.2, scale: 1.2 }}
            transition={{ duration: 0.3 }}
            className={`absolute -left-8 -top-8 w-32 h-32 rounded-full ${feature.ui.accentColor} blur-2xl`}
          />
        </motion.div>
      </div>

      {/* Content */}
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="text-xl font-bold text-foreground mb-3"
      >
        {feature.title}
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="text-muted-foreground text-base leading-relaxed"
      >
        {feature.description}
      </motion.p>
    </motion.div>
  )
);

FeatureCard.displayName = "FeatureCard";

const EnterpriseFeatures = () => {
  return (
    <section className="w-full py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-foreground/60 via-foreground to-foreground/60 bg-clip-text text-transparent bg-primary/10 h-fit p-3"
          >
            Enterprise-Grade Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Built for firms of all sizes using state-of-the-art AI fine-tuned
            for wealth management.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnterpriseFeatures;
