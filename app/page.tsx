"use client";
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle, ArrowRight, Play, Headphones } from "lucide-react";
import { CompanyMarquee } from "./components/company-marquee";
import { ThemeToggle } from "./components/theme-toggle";
import DashboardPage from "./dashboard/dashboard";
import WorkflowSection from "./components/workflow-section";
import EnterpriseFeatures from "./components/enterprise-features";
import { motion } from "framer-motion";
import { TestimonialCarousel } from "./components/testimonial-carousel";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import Hero from "./components/hero";
import NavBar from "./components/nav";
import BenefitsSection from "./components/matter";

const AdvisorXLanding = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      toast.info("Welcome to AdvisorX!", {
        position: "top-right",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background dark:bg-black text-neutral-dark dark:text-base-white flex flex-col items-center">
      <ToastContainer />
      {/* Navigation */}
      <NavBar />
      {/* Hero Section */}

      <Hero />
      <DashboardPage />
      <section className="w-full bg-background dark:bg-background/90 border-t border-border/5 flex flex-col items-center justify-center gap-7 p-10 mt-32 md:mt-10">
        <h2 className="text-4xl font-bold text-foreground">See it in action</h2>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-full md:w-[50%] aspect-video rounded-xl overflow-hidden"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent blur-2xl transform-gpu" />
          <div className="relative w-full h-full backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-border/50 bg-gradient-to-b from-background/10 to-background/5 group hover:border-primary/20 transition-colors duration-300">
            <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-transparent rounded-2xl" />
            <div className="relative h-full flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center cursor-pointer hover:bg-primary transition-colors duration-300 group-hover:shadow-lg group-hover:shadow-primary/25">
                <Play className="w-8 h-8 text-white ml-1" />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="w-[95%] text-center mt-40 md:mt-48 flex flex-col items-center">
        <h3 className="text-3xl md:text-5xl font-bold mb-12">
          Trusted by leading <br /> wealth management firms
        </h3>
        <CompanyMarquee />
      </section>
      <BenefitsSection />
      <div className="flex flex-col items-center justify-center w-full">
        {typeof window !== "undefined" && window.innerWidth > 1000 && (
          <>
            <WorkflowSection />
            <div className="absolute w-full h-full">
              <motion.div
                className="absolute top-0 right-0 w-[500px] max-w-screen h-[500px] bg-primary/20 rounded-full blur-[120px]"
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
                className="absolute bottom-0 left-0 w-[300px] max-w-screen h-[500px] bg-primary/20 rounded-full blur-[120px]"
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
          </>
        )}
        <TestimonialCarousel />
        <EnterpriseFeatures />
      </div>

      {/* Podcast Section */}
      <section className="relative w-full overflow-hidden py-32 mt-12">
        <div className="absolute rounded-full inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/10" />
        <div className="relative max-w-3xl mx-auto px-6">
          <div className="flex flex-col items-center gap-8 text-center">
            {/* Header with Podcast Icon */}
            <div className="flex items-center gap-3 mb-6">
              <Headphones className="w-12 h-12 text-primary" />
              <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
                Advisor Intelligence Podcast
              </h2>
            </div>

            {/* Subheader */}
            <p className="text-lg text-muted-foreground max-w-2xl">
              Get all the latest insights on AI for wealth management from
              industry experts.
            </p>

            {/* Email Subscription */}
            <div className="w-full max-w-md space-y-4">
              <div className="flex gap-3">
                <Input
                  placeholder="Enter your email"
                  className="flex-1 bg-background/60 backdrop-blur-sm border-border/50"
                />
                <Button className="bg-primary hover:bg-primary/90">
                  Subscribe
                </Button>
              </div>
            </div>

            {/* Platform Icons */}
            <div className="flex gap-6">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Image
                  src="/logos/apple-podcast.svg"
                  alt="Apple Podcast"
                  width={200}
                  height={40}
                />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Image
                  src="/logos/spotify.svg"
                  alt="Apple Podcast"
                  className="bg-black p-1 rounded-md"
                  width={200}
                  height={40}
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full min-h-fit flex flex-col items-center justify-center overflow-hidden bg-background dark:bg-gradient-to-b dark:bg-black rounded-t-[3rem] border-t border-border/5 py-24">
        <div className="flex flex-col items-center justify-center">
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
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">
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
            className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            Get Started
          </motion.span>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center gap-8"
          >
            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-b from-foreground via-foreground/90 to-foreground/80 bg-clip-text text-transparent">
              Join firms who are growing
              <br />
              their reach with AdvisorX
            </h2>

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
      <footer className="relative w-full bg-background dark:bg-background/50 pt-20 pb-12 overflow-hidden border-t-2 border-gray-700/5 rounded-md">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
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

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4 text-foreground">
                Quick Links
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="/about"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/security"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Security
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Pricing
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
                    href="/privacy-policy"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Terms and Conditions
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
