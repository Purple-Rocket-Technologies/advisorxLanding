"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for exploring AI-powered marketing.",
    features: [
      "1 AI Persona",
      "5 generations per month",
      "Compliance checks",
      "5 visuals",
    ],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Professional",
    price: "$99.99",
    period: "/month",
    description: "Scale your marketing with powerful AI tools.",
    features: [
      "3 AI Personas",
      "1,000 credits per month",
      "20 visuals",
      "Compliance suite",
      "Priority support",
      "Custom prompt library",
      "Post scheduling",
      "Marketing analytics",
      "1 user",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Premium",
    price: "$299.99",
    period: "/month",
    description: "Advanced features for maximum growth.",
    features: [
      "All AI Agents",
      "Unlimited generations",
      "Unlimited visuals",
      "Compliance suite",
      "24/7 priority support",
      "Custom agent development",
      "Marketing analytics",
      "Up to 4 users",
    ],
    cta: "Contact Sales",
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
          className="text-4xl font-bold mb-4"
        >
          Rome wasn&apos;t built in a day,
          <br />
          but your marketing assets will be.
        </motion.h1>
        <p className="text-muted-foreground text-xl">
          Choose the perfect plan for your needs
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
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
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
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
                    <span>{feature}</span>
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
          Need more users? Add team members for $49.99 per user/month
        </p>
      </div>
    </section>
  );
}
