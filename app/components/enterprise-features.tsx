"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Mail, BarChart3, Target, Users, Globe } from "lucide-react";

interface BaseUI {
  bgColor: string;
  borderColor: string;
  accentColor: string;
}

interface LeadScrapingUI extends BaseUI {
  type: "lead-scraping";
  label: "Lead Search";
  businesses: Array<{
    name: string;
    industry: string;
    location: string;
    employees: string;
  }>;
}

interface EmailFinderUI extends BaseUI {
  type: "email-finder";
  label: "Email Discovery";
  emails: Array<{
    name: string;
    title: string;
    email: string;
    confidence: string;
  }>;
}

interface CampaignUI extends BaseUI {
  type: "campaign";
  label: "Campaign Management";
  campaigns: Array<{
    name: string;
    status: string;
    sent: number;
    opened: number;
    replied: number;
  }>;
}

type FeatureUI = LeadScrapingUI | EmailFinderUI | CampaignUI;

const features = [
  {
    title: "Lead Scraping Engine",
    description:
      "Automatically scrapes leads specific to your service area and target criteria. Our AI identifies decision-makers at local businesses, filtering by industry, company size, and geographic location to ensure high-quality prospects.",
    ui: {
      type: "lead-scraping",
      label: "Lead Search",
      businesses: [
        {
          name: "Austin Tech Solutions",
          industry: "Technology",
          location: "Austin, TX",
          employees: "25-50"
        },
        {
          name: "Hill Country Accounting",
          industry: "Financial Services",
          location: "Austin, TX", 
          employees: "10-25"
        },
        {
          name: "Texas Manufacturing Co",
          industry: "Manufacturing",
          location: "Austin, TX",
          employees: "50-100"
        }
      ],
      bgColor: "bg-cardBg",
      borderColor: "border-primary/20",
      accentColor: "bg-primary text-white",
    },
  },
  {
    title: "Decision-Maker Email Discovery",
    description:
      "Our AI agent finds verified decision-maker emails with industry-leading accuracy. We get much more coverage of business owner emails compared to other solutions, which is our secret sauce for better results.",
    ui: {
      type: "email-finder",
      label: "Email Discovery",
      emails: [
        {
          name: "Sarah Johnson",
          title: "CEO",
          email: "sarah@austintech.com",
          confidence: "98%"
        },
        {
          name: "Mike Rodriguez", 
          title: "CFO",
          email: "mike@hillcountry.com",
          confidence: "94%"
        },
        {
          name: "Jennifer Liu",
          title: "President",
          email: "jen@texasmfg.com", 
          confidence: "96%"
        }
      ],
      bgColor: "bg-cardBg",
      borderColor: "border-secondary/20",
      accentColor: "bg-secondary",
    },
  },
  {
    title: "Automated Email Campaigns",
    description:
      "Automatically creates and manages email campaigns with best-practice sequences. Our expert team helps you set up campaigns while maintaining full email deliverability and CRM integration for seamless lead nurturing.",
    ui: {
      type: "campaign",
      label: "Campaign Management",
      campaigns: [
        {
          name: "Austin Financial Services",
          status: "Active",
          sent: 1247,
          opened: 398,
          replied: 47
        },
        {
          name: "Tech Startup Outreach",
          status: "Active", 
          sent: 892,
          opened: 285,
          replied: 31
        }
      ],
      bgColor: "bg-cardBg",
      borderColor: "border-secondary/20",
      accentColor: "bg-secondary",
    },
  }
] as const;

const LeadScrapingDisplay = ({ businesses }: { 
  businesses: ReadonlyArray<{
    name: string;
    industry: string;
    location: string;
    employees: string;
  }> 
}) => (
  <motion.div initial={{ opacity: 1 }} className="flex flex-col gap-4">
    <div className="text-xl font-medium mb-2 flex items-center gap-2">
      <Search className="w-5 h-5 text-primary" />
      Leads Found: {businesses.length * 142}
    </div>
    <div className="flex flex-col gap-3">
      {businesses.map((business, index) => (
        <motion.div
          key={business.name}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-xl p-4 hover:shadow-sm transition-shadow"
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="font-medium text-sm text-foreground">{business.name}</div>
              <div className="text-xs text-gray-500">{business.industry}</div>
              <div className="text-xs text-gray-400 mt-1">{business.location} • {business.employees} employees</div>
            </div>
            <div className="w-2 h-2 rounded-full bg-green-500 mt-2" />
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const EmailFinderDisplay = ({ emails }: { 
  emails: ReadonlyArray<{
    name: string;
    title: string;
    email: string;
    confidence: string;
  }> 
}) => (
  <motion.div initial={{ opacity: 1 }} className="flex flex-col gap-4">
    <div className="text-xl font-medium mb-2 flex items-center gap-2">
      <Mail className="w-5 h-5 text-secondary" />
      Email Discovery
    </div>
    <div className="flex flex-col gap-3">
      {emails.map((email, index) => (
        <motion.div
          key={email.email}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-xl p-4 hover:shadow-sm transition-shadow"
        >
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="font-medium text-sm text-foreground">{email.name}</div>
              <div className="text-xs text-gray-500">{email.title}</div>
              <div className="text-xs text-blue-600 mt-1">{email.email}</div>
            </div>
            <div className="text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded">
              {email.confidence}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const CampaignDisplay = ({ campaigns }: { 
  campaigns: ReadonlyArray<{
    name: string;
    status: string;
    sent: number;
    opened: number;
    replied: number;
  }> 
}) => (
  <motion.div initial={{ opacity: 1 }} className="flex flex-col gap-4">
    <div className="text-xl font-medium mb-2 flex items-center gap-2">
      <BarChart3 className="w-5 h-5 text-secondary" />
      Active Campaigns
    </div>
    <div className="flex flex-col gap-3">
      {campaigns.map((campaign, index) => (
        <motion.div
          key={campaign.name}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-xl p-4 hover:shadow-sm transition-shadow"
        >
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <div className="font-medium text-sm text-foreground">{campaign.name}</div>
              <div className="text-xs text-green-600 font-medium">{campaign.status}</div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 text-xs">
            <div className="text-center">
              <div className="font-bold text-gray-700">{campaign.sent}</div>
              <div className="text-gray-500">Sent</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-blue-600">{campaign.opened}</div>
              <div className="text-gray-500">Opened</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-green-600">{campaign.replied}</div>
              <div className="text-gray-500">Replied</div>
            </div>
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
          {feature.ui.type === "lead-scraping" && (
            <LeadScrapingDisplay businesses={feature.ui.businesses} />
          )}

          {feature.ui.type === "email-finder" && (
            <EmailFinderDisplay emails={feature.ui.emails} />
          )}

          {feature.ui.type === "campaign" && (
            <CampaignDisplay campaigns={feature.ui.campaigns} />
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
            Lead generation, done for you
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base md:text-xl text-gray-700 font-medium max-w-[80%] md:max-w-3xl mx-auto mb-8"
          >
            AdvisorX automates the entire lead generation and marketing process for you to local business owners.
          </motion.p>
          
          {/* Process Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-8">
              {[
                { number: "1", text: "Scrapes leads specific to your service area" },
                { number: "2", text: "Finds the decision-maker emails" },
                { number: "3", text: "Generates best practice emails" },
                { number: "4", text: "Our expert team helps you setup campaigns" },
                { number: "5", text: "Automatically creates and manages email campaigns" }
              ].map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary text-white font-bold flex items-center justify-center mb-3">
                    {step.number}
                  </div>
                  <p className="text-sm text-gray-600">{step.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
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
