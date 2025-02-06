"use client";

import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Intelligent Knowledge Base",
    description:
      "Connect your documents or pull real-time data from the web. AdvisorX retrieves all sources into accurate content tailored to your firm.",
    ui: {
      type: "search",
      placeholder: "Search knowledge base...",
      items: ["Market Research", "Client Documents", "Web Data"],
      bgColor: "bg-cardBg",
      borderColor: "border-primary/20",
      accentColor: "bg-primary",
    },
  },
  {
    title: "Persona Builder",
    description:
      "Create custom AI personas for your specific content needs. Get support for ongoing fine-tuning to match your firm's brand guidelines.",
    ui: {
      type: "select",
      label: "Select Persona",
      options: ["Professional", "Educational", "Conversational"],
      bgColor: "bg-cardBg",
      borderColor: "border-primary/20",
      accentColor: "bg-primary",
    },
  },
  {
    title: "Marketing Compliance",
    description:
      "Expedite your compliance workflows with FINRA/SEC compliance reviews that flag phrases and statements with recomendations.",
    ui: {
      type: "upload",
      label: "Compliance Check",
      status: "Reviewing...",
      progress: 85,
      bgColor: "bg-cardBg",
      borderColor: "border-secondary/20",
      accentColor: "bg-secondary",
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
      bgColor: "bg-cardBg",
      borderColor: "border-primary/20",
      accentColor: "bg-primary text-white",
    },
  },
  {
    title: "Data-driven Visuals",
    description:
      "Create charts, images and infographics in your firm's brand colors and engage clients across your social media channels.",
    ui: {
      type: "toggle",
      label: "Visual Style",
      options: ["Charts", "Images", "Infographics"],
      bgColor: "bg-cardBg",
      borderColor: "border-secondary/20",
      accentColor: "bg-secondary",
    },
  },
  {
    title: "Content Studio",
    description:
      "Add your unique perspective, tone and target audience. Reformat content, opening hooks, and client sophistication levels to drive engagement.",
    ui: {
      type: "chat",
      messages: [
        { text: "Adjust content tone", type: "bot" },
        { text: "Make it more professional", type: "user" },
      ],
      bgColor: "bg-cardBg",
      borderColor: "border-primary/20",
      accentColor: "bg-primary",
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
                {feature.ui.items.map((item) => (
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
                      false
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
                      i === 3
                        ? feature.ui.accentColor
                        : "bg-background/60 text-black"
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
    <section className="w-full py-12 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-6xl font-bold text-black mb-12 bg-gradient-to-b from-secondary via-cyan-800 to-primary bg-clip-text text-transparent"
          >
            Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-700 font-medium max-w-3xl mx-auto"
          >
            Marketing for firms of all sizes using state-of-the-art AI for
            wealth management.
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
