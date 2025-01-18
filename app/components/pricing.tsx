"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PricingTier {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
}

const tiers: PricingTier[] = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for trying out AdvisorX",
    features: [
      "1 AI Agent of choice",
      "100 generations per month",
      "Basic compliance checks",
      "Email support",
      "Community access",
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$99",
    period: "/month",
    description: "Everything you need to grow your practice",
    features: [
      "3 AI Agents",
      "1,000 generations per month",
      "Compliance suite",
      "Priority support",
      "Custom prompt library",
      "Post scheduling",
      "Basic analytics",
    ],
    cta: "Start 7-Day Trial",
    highlighted: true,
  },
  {
    name: "Premium",
    price: "$299",
    period: "/month",
    description: "Advanced features for larger practices",
    features: [
      "Unlimited AI Agents",
      "Unlimited generations",
      "Compliance suite",
      "24/7 priority support",
      "Custom agent development",
      "Advanced analytics",
      "Dedicated success manager",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

const FeatureIcon = ({ highlighted }: { highlighted: boolean }) => (
  <motion.div
    whileHover={{ scale: 1.2, rotate: 5 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
    className={`rounded-full p-1 ${
      highlighted ? "bg-primary" : "bg-primary/10"
    }`}
  >
    <Check
      className={`w-4 h-4 ${
        highlighted ? "text-primary-foreground" : "text-primary"
      }`}
    />
  </motion.div>
);

export default function Pricing() {
  return (
    <section className="py-24 relative overflow-hidden min-w-full" id="pricing">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">Flexible Plans</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground/60 via-foreground to-foreground/60 bg-clip-text text-transparent mb-6"
          >
            Simple, transparent pricing
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Rome wasn't built in a day, but your marketing assets will be.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 max-w-7xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              className={`relative flex flex-col p-8 rounded-2xl border ${
                tier.highlighted
                  ? "border-primary/50 bg-primary/5"
                  : "border-border bg-card"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-5 left-0 right-0 flex justify-center">
                  <div className="bg-primary text-primary-foreground text-sm font-medium px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="mb-8">
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  className="text-xl font-bold mb-2"
                >
                  {tier.name}
                </motion.h3>
                <div className="flex items-baseline gap-1">
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    className="text-4xl font-bold"
                  >
                    {tier.price}
                  </motion.span>
                  {tier.period && (
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                      className="text-muted-foreground"
                    >
                      {tier.period}
                    </motion.span>
                  )}
                </div>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  className="text-muted-foreground mt-2"
                >
                  {tier.description}
                </motion.p>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {tier.features.map((feature, featureIndex) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.2,
                      delay: 0.6 + index * 0.1 + featureIndex * 0.05,
                    }}
                    className="flex items-center gap-3"
                  >
                    <FeatureIcon highlighted={tier.highlighted} />
                    <span className="text-muted-foreground">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <Button
                variant={tier.highlighted ? "default" : "outline"}
                className="w-full"
              >
                {tier.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
