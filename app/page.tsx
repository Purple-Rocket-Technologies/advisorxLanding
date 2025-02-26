"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Play } from "lucide-react";
import { CompanyMarquee } from "./components/company-marquee";
import DashboardPage from "./dashboard/dashboard";
import WorkflowSection from "./components/workflow-section";
import EnterpriseFeatures from "./components/enterprise-features";
import { motion } from "framer-motion";
import { TestimonialCarousel } from "./components/testimonial-carousel";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Hero from "./components/hero";
import NavBar from "./components/nav";
import BenefitsSection from "./components/matter";
import Footer from "./components/footer";

const AdvisorXLanding = () => {
  const [heroHeight, setHeroHeight] = useState(0);
  const minHeightForOverlay = 850; // minimum height needed for overlay effect

  const dashboardStyle =
    heroHeight >= minHeightForOverlay
      ? { marginTop: `-${heroHeight * 0.1}px` }
      : { marginTop: "32px" }; // regular spacing if not enough height

  useEffect(() => {
    const timer = setTimeout(() => {
      toast.info("Welcome to AdvisorX!", {
        position: "bottom-right",
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

      <Hero onHeightChange={setHeroHeight} />
      <div
        className="flex justify-center transition-all duration-300"
        style={dashboardStyle}
      >
        <DashboardPage />
      </div>
      <section className="w-full bg-background dark:bg-background/90 border-t border-border/5 flex flex-col items-center justify-center gap-12 p-10 mt-32 md:mt-10">
        <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-b from-secondary via-cyan-800 to-primary bg-clip-text text-transparent text-center">
          See it in action
        </h2>
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
        <h3 className="text-4xl md:text-6xl font-bold mb-12 bg-gradient-to-br from-secondary via-cyan-700 to-primary bg-clip-text text-transparent pb-2">
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

      {/* Pricing Section */}
      <section className="w-full py-20 flex flex-col items-center justify-center md:hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-br from-secondary via-cyan-700 to-primary bg-clip-text text-transparent">
            Ready to transform your practice?
          </h3>
          <Button
            className="bg-primary/10 hover:bg-primary/20 text-primary text-lg px-8 py-6 rounded-full transition-all duration-300"
            onClick={() => (window.location.href = "/pricing")}
          >
            See Pricing
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
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
            <h3 className="text-4xl md:text-6xl font-bold pb-2 text-black bg-gradient-to-b from-secondary via-cyan-800 to-primary bg-clip-text text-transparent">
              Join firms who are growing
              <br className="hidden md:block" /> their reach with AdvisorX
            </h3>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center gap-4 md:mt-8"
            >
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm md:text-lg px-8 py-6 shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all duration-300">
                Start Free Trial
              </Button>
              <Button
                variant="outline"
                className="text-sm md:text-lg px-8 py-6 border-border hover:bg-accent transition-all duration-300 group"
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
                <span className="text-sm md:text-lg">7-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm md:text-lg">Cancel anytime</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AdvisorXLanding;
