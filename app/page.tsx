"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle, ArrowRight, Play, Mail } from "lucide-react";
import { AnimatedText } from "./components/animated-text";
import { GridBackground } from "./components/grid-background";
import { TrustedBy } from "./components/trusted-by";
import { CompanyMarquee } from "./components/company-marquee";
import { ThemeToggle } from "./components/theme-toggle";
import AppleStyleDashboard from "./components/feature";
import DashboardPage from "./dashboard/dashboard";
import WorkflowSection from "./components/workflow-section";
import EnterpriseFeatures from "./components/enterprise-features";
import { motion } from "framer-motion";
import Pricing from "./components/pricing";
import { TestimonialCarousel } from "./components/testimonial-carousel";

const AdvisorXLanding = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 backdrop-blur-lg bg-background/60 border-b border-border/40 flex items-center justify-between p-6 w-full z-50">
        <div className="text-2xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
          AdvisorX
        </div>
        <div className="hidden md:flex space-x-8">
          <a
            href="#features"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            Features
          </a>
          <a
            href="#security"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            Security
          </a>
          <a
            href="#pricing"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            Pricing
          </a>
          <a
            href="#resources"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            Resources
          </a>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300">
            Get Started
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className=" px-4 md:px-6 py-32 md:py-40 min-h-[80vh] flex flex-col items-center justify-center min-w-[90%]">
        {/* Background */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <GridBackground />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90" />
          <motion.div
            className="absolute top-20 -right-32 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]"
            animate={{
              x: [0, 20, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]"
            animate={{
              x: [0, -20, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </div>

        <div className="z-10 flex flex-col md:flex-row items-center justify-between gap-12 w-[90%]">
          {/* Left Content */}
          <div className="w-full md:w-[45%] flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <TrustedBy />
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-left w-full bg-gradient-to-r from-foreground via-foreground/90 to-foreground/80 bg-clip-text text-transparent">
              <span>
                <AnimatedText text="AI Marketing " delay={0.2} />
              </span>
              <span>
                <AnimatedText text="Suite for " delay={0.8} />
              </span>
              <span>
                <AnimatedText text="Wealth " delay={1.2} />
              </span>
              <span>
                <AnimatedText text="Advisors " delay={1.6} />
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg md:text-xl mb-8 text-muted-foreground font-medium w-full md:w-[90%] text-left leading-relaxed"
            >
              Scale your firm with AI-powered marketing tools designed
              specifically for RIAs and wealth management firms. Stay compliant,
              engage prospects, and grow your AUM.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row justify-start gap-4 w-full"
            >
              <Button className="bg-primary hover:bg-primary/90 text-base md:text-lg px-8 py-6 w-full sm:w-auto shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300">
                Start Free Trial
              </Button>
              <Button
                variant="outline"
                className="text-base md:text-lg px-8 py-6 w-full sm:w-auto border-primary/20 hover:bg-primary/5 transition-all duration-300"
              >
                Schedule Demo
              </Button>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-4 text-muted-foreground/80 text-sm md:text-base text-left flex items-center gap-2"
            >
              <CheckCircle className="w-4 h-4 text-primary" />
              No credit card required • 7-day free trial • Cancel anytime
            </motion.p>
          </div>

          {/* Right Content - Video Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-full md:w-[45%] aspect-video rounded-xl overflow-hidden hidden md:block"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent blur-2xl transform-gpu" />
            <div className="relative w-full h-full backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-border/50 bg-gradient-to-b from-background/10 to-background/5 group hover:border-primary/20 transition-colors duration-300">
              <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-transparent rounded-2xl" />
              <div className="relative h-full flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-primary/80 flex items-center justify-center cursor-pointer hover:bg-primary transition-colors duration-300 group-hover:shadow-lg group-hover:shadow-primary/25">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <DashboardPage />
      <section className="w-[60%] flex flex-col items-center mt-28">
        <h3 className="text-4xl font-bold text-foreground">
          Trusted by Leading Firms
        </h3>
        <CompanyMarquee />
      </section>

      <div className="flex flex-col items-center justify-center w-full mt-28">
        <div className="flex flex-col items-center justify-center gap-4">
          <h3 className="text-4xl text-center font-bold text-foreground">
            Save 10+ hours each week on
            <br />
            compliant marketing workflows
          </h3>
          <p className="text-lg text-muted-foreground">
            Seamlessly connect your existing tools and data sources to power
            your AI-driven marketing
          </p>
        </div>
        <WorkflowSection />
        <div className="absolute w-full h-full">
          <motion.div
            className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]"
            animate={{
              x: [0, 20, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]"
            animate={{
              x: [0, -20, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </div>
        <AppleStyleDashboard />
        <EnterpriseFeatures />
        <TestimonialCarousel />
      </div>

      <Pricing />

      {/* Newsletter Section */}
      <section className="relative  w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative max-w-6xl mx-auto px-6 py-24"
        >
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-left">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-4xl font-bold bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-transparent mb-6">
                  Stay Ahead with AI Insights
                </h2>
                <p className="text-lg text-muted-foreground mb-4 max-w-md">
                  Get weekly tips and strategies for leveraging AI in your
                  practice. Join 10,000+ financial advisors already growing
                  their business with our insights.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md">
                  <div className="flex-1 relative group">
                    <Input
                      placeholder="Enter your email"
                      className="w-full bg-background/60 backdrop-blur-sm border-border/50 focus:border-primary/50 transition-all duration-300 pr-24"
                    />
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
                      <span className="text-xs text-muted-foreground/60">
                        @company.com
                      </span>
                    </div>
                  </div>
                  <Button className="bg-primary hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/30">
                    Subscribe
                  </Button>
                </div>
                <p className="mt-4 text-sm text-muted-foreground/80 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Join 10,000+ financial advisors
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex-1"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent blur-2xl" />
                <div className="relative bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-6 shadow-xl">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        Latest Issue
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Dec 2024 • 5 min read
                      </p>
                    </div>
                  </div>
                  <h3 className="text-lg font-medium mb-2">
                    10 Ways AI is Transforming Financial Advisory
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Discover how leading advisors are using AI to streamline
                    their practice and deliver better client outcomes...
                  </p>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="w-6 h-6 rounded-full bg-primary/20 border-2 border-background"
                        />
                      ))}
                    </div>
                    <span className="text-muted-foreground">+2.5k readers</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden bg-background dark:bg-gradient-to-b dark:from-background dark:to-background/90 rounded-t-[3rem] border-t border-border/5">
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[120px]"
            animate={{
              x: [0, 20, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/3 dark:bg-primary/5 rounded-full blur-[120px]"
            animate={{
              x: [0, -20, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
          <div className="absolute inset-0" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center gap-8"
          >
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
              Get Started Today
            </motion.span>

            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-b from-foreground via-foreground/90 to-foreground/80 bg-clip-text text-transparent">
              Hire Your AI Marketing
              <br />
              Labor Force Today
            </h2>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of advisors who are scaling their practice with
              AI-powered marketing automation.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
            >
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all duration-300">
                Start Free Trial
              </Button>
              <Button
                variant="outline"
                className="text-lg px-8 py-6 border-border hover:bg-accent transition-all duration-300 group"
              >
                Schedule Demo
                <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-8 mt-12 text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>7-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Cancel anytime</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative w-full bg-background dark:bg-background/50 border-t border-border/5 pt-20 pb-12 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0  bg-[length:20px_20px]" />
          <motion.div
            className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[120px] -translate-y-1/2"
            animate={{
              opacity: [0.5, 0.3, 0.5],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                AdvisorX
              </div>
              <p className="text-muted-foreground text-sm max-w-xs">
                AI-powered marketing suite designed specifically for RIAs and
                wealth management firms.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Product */}
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Product</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Security
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Resources
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Company</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Press
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Legal</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Terms
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Licenses
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border/5">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground">
                © 2025 AdvisorX. All rights reserved.
              </p>
              <div className="flex items-center gap-4">
                <ThemeToggle />
                <select className="bg-transparent text-sm text-muted-foreground border-none focus:outline-none focus:ring-0">
                  <option value="en">English (US)</option>
                  <option value="es">Español</option>
                  <option value="fr">Français</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AdvisorXLanding;
