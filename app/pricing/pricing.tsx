"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "Starter",
    price: "$99.99",
    period: "/month",
    description: "Perfect for exploring AI-powered marketing.",
    features: [
      "10 AI Personas",
      "20 Visuals",
      "100 Compliance Reviews",
      "Single user access",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    price: "$299.99",
    period: "/month",
    description: "Scale your marketing with powerful AI tools.",
    features: [
      "Unlimited Personas",
      "100 visuals",
      "Unlimited compliance reviews",
      "Custom prompt library",
      "Post scheduling",
      "Marketing analytics",
      "Up to 5 users",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Premium",
    price: "$899.99",
    period: "/month",
    description: "Advanced features for maximum growth.",
    features: [
      "SEO + GEO content",
      "Unlimited Personas",
      "Unlimited visuals",
      "Unlimited compliance reviews",
      "Custom prompt library",
      "Post scheduling",
      "Marketing analytics",
      "Up to 15 users",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Elite",
    price: "$2,999",
    period: "/month",
    description: "Done-For-You Marketing Service.",
    features: [
      "Quarterly CMO-level strategy aligned with firm goals",
      "LinkedIn profile tracking of website visitors for lead generation",
      "4 SEO + GEO optimized blogs monthly",
      "20 social media posts across LinkedIn/Facebook/X/Instagram",
      "4 client newsletters monthly",
      "1 premium e-book each month",
      "4 market updates with custom analysis",
      "Full AdvisorX platform access for up to 10 users",
      "Detailed compliance reviews",
      "Complete content creation, scheduling, and analytics",
      "Dedicated AI team",
    ],
    cta: "Get Started",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-20 px-4 w-full max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl max-w-[90%] mx-auto md:text-6xl font-bold mb-6 bg-gradient-to-br from-secondary via-cyan-700 to-primary bg-clip-text text-transparent pb-2"
        >
          Rome wasn&apos;t built in a day,
          <br className="hidden md:block" /> but your marketing assets will be.
        </motion.h1>
        <p className="text-muted-foreground text-sm md:text-xl">
          Choose the perfect plan for your needs
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-8">
        {tiers.map((tier, i) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`relative p-8 rounded-2xl border backdrop-blur-sm shadow-sm flex flex-col justify-between ${
              tier.popular
                ? "border-primary/50 bg-primary/[0.02] shadow-primary/5"
                : "border-border/50 bg-background/80"
            }`}
          >
            {tier.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-sm font-medium bg-primary text-primary-foreground">
                Most Popular
              </div>
            )}

            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-br from-secondary via-cyan-700 to-primary bg-clip-text text-transparent pb-2">
                  {tier.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  {tier.period && (
                    <span className="text-muted-foreground">{tier.period}</span>
                  )}
                </div>
                <p className="text-muted-foreground">{tier.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-xs">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button
              className={`w-full ${
                tier.popular
                  ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                  : "bg-primary/10 hover:bg-primary/20 text-foreground hover:text-primary border border-primary/20"
              }`}
            >
              {tier.cta}
            </Button>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-muted-foreground">
          All the benefits of Premium software plus full-service marketing
          execution at a fraction of the cost of hiring a team.
        </p>
      </div>
    </section>
  );
}
