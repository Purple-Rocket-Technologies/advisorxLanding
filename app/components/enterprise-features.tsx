"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

interface BaseUI {
  bgColor: string;
  borderColor: string;
  accentColor: string;
}

interface VisitorUI extends BaseUI {
  type: "visitor";
  label: "Recent Visitors";
  visitors: Array<{
    name: string;
    title: string;
    company: string;
    viewed: string;
    time: string;
  }>;
}

interface SelectUI extends BaseUI {
  type: "select";
  label: string;
  options: string[];
}

// Add this with the other interfaces at the top
type FeatureUI = MetricsUI | VisitorUI | SelectUI | {
  type: "toggle" | "calendar" | "chat" | "upload";
  label: string;
  [key: string]: any;
};

interface MetricsUI {
  type: "metrics";
  label: "Platform Metrics";
  metrics: ["Engagement", "Reach", "Followers"];
  platforms: ["LinkedIn", "Instagram", "X"];
  bgColor: "bg-cardBg";
  borderColor: "border-secondary/20";
  accentColor: "bg-secondary";
}

function isMetricsUI(ui: any): ui is MetricsUI {
  return ui.type === "metrics";
}

const features = [
  {
    title: "Agentic Scheduling",
    description:
      "Let your marketing agent autonomously create and publish content at optimal times, or review in your approval queue before posting. Every post undergoes compliance pre-checks and is automatically archived for audit purposes.",
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
    title: "Media Gallery",
    description:
      "Receive monthly reminders to refresh your image and video library that enhances your social media presence. Your content remains visually engaging with minimal ongoing effort.",
    ui: {
      type: "toggle",
      label: "Content Type",
      options: ["Photos", "Videos", "Graphics"],
      bgColor: "bg-cardBg",
      borderColor: "border-secondary/20",
      accentColor: "bg-secondary",
    },
  },
  {
    title: "Marketing Compliance",
    description:
      "Every piece of content undergoes SEC/FINRA review before publishing with automatic archiving for audit purposes. Maintain regulatory compliance while streamlining your review process.",
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
    title: "Marketing Analytics",
    description:
      "View performance metrics across LinkedIn, YouTube, Instagram, and X in one intuitive dashboard. Make data-driven decisions with clear insights on what content resonates with your audience.",
    ui: {
      type: "metrics",
      label: "Platform Metrics",
      metrics: ["Engagement", "Reach", "Followers"],
      platforms: ["LinkedIn", "Instagram", "X"],
      bgColor: "bg-cardBg",
      borderColor: "border-secondary/20",
      accentColor: "bg-secondary",
    },
  },
  {
    title: "Visitor Identity",
    description:
      "Identify who's visiting your website with person-level visitor tracking that reveals LinkedIn profiles of prospects engaging with your content. Convert anonymous traffic into qualified leads with actionable intelligence.",
    ui: {
      type: "visitor",
      label: "Recent Visitors",
      visitors: [
        {
          name: "Jane Doe",
          title: "Financial Advisor",
          company: "Morgan Stanley",
          viewed: "Investment Strategies",
          time: "2m ago"
        },
        {
          name: "John Smith",
          title: "Portfolio Manager",
          company: "BlackRock",
          viewed: "Market Analysis",
          time: "5m ago"
        },
      ],
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

  {
    title: "Advisor Hub",
    description:
      "A content workstation for advisors with visually grounded document intelligence. Access all the best AI models in one interface with specialized data feeds, firm-specific prompt library and agent assistance.",
    ui: {
      type: "chat",
      messages: [
        { text: "Write a LinkedIn post about Financial Planning", type: "user" },
        { text: "Sure, I can write a post about the importance of financial planning.\n Financial planning is important because it helps you achieve your goals and make the most of your money.", type: "bot" },
      ],
      bgColor: "bg-cardBg",
      borderColor: "border-primary/20",
      accentColor: "bg-primary",
    },
  },
] as const;

const MetricsDisplay = ({ metrics, platforms }: { 
  metrics: readonly string[],
  platforms: readonly string[] 
}) => (
  <motion.div initial={{ opacity: 1 }} className="flex flex-col gap-6">
    <div className="text-base font-medium">Platform Metrics</div>
    <div className="grid grid-cols-4 gap-8">
      <div className="text-base"></div> {/* Empty cell for alignment */}
      {platforms.map(platform => (
        <div key={platform} className="text-base flex justify-center items-center text-xl">
          {platform === "LinkedIn" && (
            <FaLinkedin className="text-[#0077b5]" aria-label="LinkedIn" />
          )}
          {platform === "Instagram" && (
            <FaInstagram className="text-[#E4405F]" aria-label="Instagram" />
          )}
          {platform === "X" && (
            <FaTwitter className="text-[#0077b5]" aria-label="X" />
          )}
        </div>
      ))}
      {metrics.map(metric => (
        <React.Fragment key={metric}>
          <div className="text-base font-medium">{metric}</div>
          {platforms.map(platform => (
            <div key={`${platform}-${metric}`} className="text-base text-muted-foreground text-center">
              --
            </div>
          ))}
        </React.Fragment>
      ))}
    </div>
  </motion.div>
);

const ChatDisplay = ({ messages }: { 
  messages: ReadonlyArray<{ readonly text: string, readonly type: 'bot' | 'user' }> 
}) => (
  <motion.div initial={{ opacity: 1 }} className="flex flex-col gap-3">
    {messages.map((msg, i) => (
      <motion.div
        key={i}
        className={`flex ${msg.type === "bot" ? "justify-start" : "justify-end"}`}
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          className={`rounded-3xl px-6 py-3 text-xs ${
            msg.type === "bot" 
              ? "bg-white text-black text-xs" 
              : "bg-primary text-white text-xs"
          }`}
        >
          {msg.text}
        </motion.div>
      </motion.div>
    ))}
  </motion.div>
);

const SelectDisplay = ({ options }: { options: readonly string[] }) => (
  <motion.div initial={{ opacity: 1 }} className="flex flex-col gap-4">
    <div className="text-xl font-medium mb-2">Visual Style</div>
    <div className="flex flex-col gap-3">
      {options.map((option, index) => (
        <motion.div
          key={option}
          className={`flex items-center gap-3 p-4 rounded-xl cursor-pointer ${
            index === 0 ? "bg-white" : "hover:bg-white/50"
          }`}
        >
          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
            index === 0 ? "border-secondary" : "border-gray-300"
          }`}>
            {index === 0 && (
              <div className="w-3 h-3 rounded-full bg-secondary" />
            )}
          </div>
          <span className="text-lg">{option}</span>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const VisitorDisplay = ({ visitors }: { 
  visitors: ReadonlyArray<{
    name: string;
    title: string;
    company: string;
    viewed: string;
    time: string;
  }> 
}) => (
  <motion.div initial={{ opacity: 1 }} className="flex flex-col gap-4">
    <div className="text-xl font-medium mb-2">Recent Visitors</div>
    <div className="flex flex-col gap-3">
      {visitors.map((visitor, index) => (
        <motion.div
          key={visitor.name}
          className="bg-white rounded-xl p-4 hover:shadow-sm transition-shadow"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-medium">
              {visitor.name.charAt(0)}
            </div>
            <div className="flex-1">
              <div className="font-medium text-sm">{visitor.name}</div>
              <div className="text-xs text-gray-500">{visitor.title} • {visitor.company}</div>
            </div>
            <div className="text-xs text-gray-400">{visitor.time}</div>
          </div>
          <div className="mt-2 text-xs text-gray-500">
            Viewed: {visitor.viewed}
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const FeatureCard = React.memo(
  ({ feature }: { feature: { title: string; description: string; ui: FeatureUI } }) => (
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
                {feature.ui.options.map((option: string) => (
                  <motion.div
                    key={option}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-2 text-center text-sm rounded-lg cursor-pointer ${false
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
            <SelectDisplay options={feature.ui.options} />
          )}

          {feature.ui.type === "metrics" && (
            <MetricsDisplay 
              metrics={feature.ui.metrics} 
              platforms={feature.ui.platforms} 
            />
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
                  {feature.ui.platforms.map((platform: string) => (
                    <motion.div
                      key={platform}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      className="w-6 h-6 rounded-full bg-background/60 flex items-center justify-center text-xs cursor-pointer"
                    >
                      {/* render the icons */}
                      {platform === "LinkedIn" && (
                        <FaLinkedin className="text-[#0077b5]" aria-label="LinkedIn" />
                      )}
                      {platform === "Instagram" && (
                        <FaInstagram className="text-[#E4405F]" aria-label="Instagram" />
                      )}
                      {platform === "Twitter" && (
                        <FaTwitter className="text-[#0077b5]" aria-label="X" />
                      )}
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
                    className={`aspect-square rounded-lg ${i === 3
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
            <ChatDisplay messages={feature.ui.messages} />
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

          {feature.ui.type === "visitor" && (
            <VisitorDisplay visitors={feature.ui.visitors} />
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
        className="text-black text-base leading-relaxed"
      >
        {feature.description}
      </motion.p>
    </motion.div>
  )
);

FeatureCard.displayName = "FeatureCard";

const EnterpriseFeatures = () => {
  return (
    <section className="w-full py-12 relative" id="features">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold text-black md:mb-12 mb-6 bg-gradient-to-b from-secondary via-cyan-800 to-primary bg-clip-text text-transparent"
          >
            Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base md:text-xl text-gray-700 font-medium max-w-[80%] md:max-w-3xl mx-auto"
          >
            The complete inbound marketing ecosystem for growth-minded RIAs
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature as any} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnterpriseFeatures;
