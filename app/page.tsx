"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Play } from "lucide-react";
import { CompanyMarquee } from "./components/company-marquee";
import { motion } from "framer-motion";
import { TestimonialCarousel } from "./components/testimonial-carousel";
import Hero from "./components/hero";
import NavBar from "./components/nav";
import Footer from "./components/footer";
import WhyItMatters from "./components/why-it-matters";
import EnterpriseFeatures from "./components/enterprise-features";

// Lead Generation Dashboard Component
const LeadGenDashboard = () => {
  return (
    <div className="hidden md:flex min-h-[85vh] w-[80vw] rounded-2xl bg-background relative overflow-hidden shadow-xl border border-border z-50">
      {/* Background Effects */}
      <div className="absolute w-full h-full">
        <motion.div
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary opacity-20 rounded-full blur-[120px]"
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
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary opacity-20 rounded-full blur-[120px]"
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

      {/* Main Dashboard Content */}
      <div className="flex-1 p-8 relative z-50 w-full">
        <div className="h-full">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Lead Generation Dashboard</h1>
            <p className="text-muted-foreground">Austin Financial Services Campaign</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl p-6 border border-border/20 shadow-sm"
            >
              <div className="text-2xl font-bold text-primary mb-1">2,847</div>
              <div className="text-sm text-muted-foreground">Leads Scraped</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl p-6 border border-border/20 shadow-sm"
            >
              <div className="text-2xl font-bold text-secondary mb-1">1,423</div>
              <div className="text-sm text-muted-foreground">Emails Found</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl p-6 border border-border/20 shadow-sm"
            >
              <div className="text-2xl font-bold text-green-600 mb-1">8.4%</div>
              <div className="text-sm text-muted-foreground">Reply Rate</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-xl p-6 border border-border/20 shadow-sm"
            >
              <div className="text-2xl font-bold text-orange-600 mb-1">47</div>
              <div className="text-sm text-muted-foreground">Qualified Leads</div>
            </motion.div>
          </div>

          {/* Campaign List */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-xl p-6 border border-border/20 shadow-sm"
            >
              <h3 className="text-lg font-semibold mb-4 text-foreground">Active Campaigns</h3>
              <div className="space-y-4">
                {[
                  { name: "Austin Tech Startups", status: "Active", sent: 892, opened: 285, replied: 31 },
                  { name: "Local Manufacturing", status: "Active", sent: 654, opened: 198, replied: 16 },
                  { name: "Professional Services", status: "Active", sent: 743, opened: 224, replied: 19 }
                ].map((campaign, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-medium text-sm text-foreground">{campaign.name}</div>
                      <div className="text-xs text-green-600">{campaign.status}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-foreground">{campaign.replied} replies</div>
                      <div className="text-xs text-muted-foreground">{campaign.sent} sent</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-xl p-6 border border-border/20 shadow-sm"
            >
              <h3 className="text-lg font-semibold mb-4 text-foreground">Recent Leads</h3>
              <div className="space-y-4">
                {[
                  { name: "TechFlow Solutions", contact: "Sarah Johnson", email: "sarah@techflow.com", score: "98%" },
                  { name: "Austin Manufacturing", contact: "Mike Rodriguez", email: "mike@austinmfg.com", score: "94%" },
                  { name: "Central TX Consulting", contact: "Jennifer Liu", email: "jen@ctxconsult.com", score: "96%" }
                ].map((lead, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <div className="font-medium text-sm text-foreground">{lead.name}</div>
                      <div className="text-xs text-muted-foreground">{lead.contact}</div>
                      <div className="text-xs text-blue-600">{lead.email}</div>
                    </div>
                    <div className="text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded">
                      {lead.score}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AdvisorXLanding = () => {
  const [heroHeight, setHeroHeight] = useState(0);

  return (
    <div className="min-h-screen bg-background dark:bg-black text-neutral-dark dark:text-base-white flex flex-col items-center overflow-x-hidden">
      {/* Navigation */}
      <NavBar />
      {/* Hero Section */}

      <Hero onHeightChange={setHeroHeight} />
      
      {/* Added much more space before the dashboard */}
      <div className="flex justify-center transition-all duration-300 mt-32 md:mt-48 lg:mt-56">
        <LeadGenDashboard />
      </div>

      <section className="w-[95%] text-center mt-24 md:mt-32 flex flex-col items-center">
        <h3 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-br from-secondary via-cyan-700 to-primary bg-clip-text text-transparent pb-2">
          Trusted by leading firms
        </h3>
        <CompanyMarquee />
      </section>

      {/*<BenefitsSection />*/}
      <div className="flex flex-col items-center justify-center w-full">
        {typeof window !== "undefined" && window.innerWidth > 1000 && (
          <>
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

        <section className="w-full bg-background dark:bg-background/90 border-t border-border/5 flex flex-col items-center justify-center gap-12 p-10 mt-32 md:mt-10">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-b from-secondary via-cyan-800 to-primary bg-clip-text text-transparent text-center">
            See it in action
          </h2>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-full md:w-[70%] lg:w-[80%] aspect-video rounded-xl overflow-hidden"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent blur-2xl transform-gpu" />
            <div className="relative w-full h-full backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-border/50 bg-gradient-to-b from-background/10 to-background/5 group hover:border-primary/20 transition-colors duration-300">
              <div className="relative h-full rounded-xl overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/mxBDf6wqFcE"
                  title="AdvisorX AI Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full rounded-xl"
                />
              </div>
            </div>
          </motion.div>
        </section>

        <TestimonialCarousel />
        <EnterpriseFeatures />
      </div>

      {/* Pricing Section */}
      <section className="relative w-full min-h-fit flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-white via-white to-gray-50/90 py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-7xl mx-auto px-6"
        >
          <h3 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-br from-secondary via-cyan-700 to-primary bg-clip-text text-transparent">
            Pricing
          </h3>
          <p className="text-lg md:text-xl text-gray-700 mb-12">
            Choose the perfect plan for your business needs
          </p>
          
          {/* Three Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Free Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-3xl border border-border/20 shadow-lg p-6 md:p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full blur-xl" />
              
              <div className="relative z-10">
                <div className="mb-6">
                  <h4 className="text-2xl font-bold mb-2 text-foreground">Free</h4>
                  <div className="flex items-baseline justify-center gap-2 mb-4">
                    <span className="text-4xl font-bold text-foreground">$0</span>
                    <span className="text-lg text-muted-foreground">/month</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Perfect to get started</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  {[
                    "Answer Engine Optimization Consulting",
                    "How to show up on AI search",
                    "60-minute growth strategy consulting",
                    "Identifying local target businesses"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-left text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm px-6 py-3 transition-all duration-300"
                  onClick={() => window.open("https://calendly.com/advisorxai/30min", "_blank", "noopener,noreferrer")}
                >
                  Schedule Demo
                </Button>
              </div>
            </motion.div>

            {/* Professional Plan - Most Popular */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl border-2 border-primary/30 shadow-2xl p-6 md:p-8 relative overflow-visible transform scale-105 mt-6"
            >
              {/* Most Popular Badge - Fixed positioning */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full text-sm font-medium bg-primary text-primary-foreground z-20 shadow-lg">
                Most Popular
              </div>
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-secondary/10 to-primary/10 rounded-full blur-2xl" />
              
              <div className="relative z-10">
                <div className="mb-6">
                  <h4 className="text-2xl font-bold mb-2 text-foreground">Professional</h4>
                  <div className="flex items-baseline justify-center gap-2 mb-4">
                    <span className="text-4xl md:text-5xl font-bold text-foreground">$299.99</span>
                    <span className="text-lg text-muted-foreground">/month</span>
                  </div>
                  <div className="inline-block bg-gradient-to-r from-primary/10 to-secondary/10 text-primary px-3 py-1 rounded-full text-xs font-medium border border-primary/20 mb-2">
                    Early bird pricing for first 100 firms
                  </div>
                  <p className="text-sm text-muted-foreground">Complete lead generation automation</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  {[
                    "Up to 3 simultaneous campaigns",
                    "Scrape any type of local business",
                    "Fully managed email deliverability",
                    "CRM and automated marketing",
                    "White glove campaign setup",
                    "Dedicated customer success servicing",
                    "Answer engine optimization consulting",
                    "CMO-level growth strategy",
                    "Monthly content calendar",
                    "15+ story-driven LinkedIn posts"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-left text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-sm px-6 py-3 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300"
                  onClick={() => window.open("https://calendly.com/advisorxai/30min", "_blank", "noopener,noreferrer")}
                >
                  Schedule Demo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                
                <p className="text-xs text-muted-foreground mt-3 text-center">
                  60-day money back guarantee
                </p>
              </div>
            </motion.div>

            {/* Premium Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-3xl border border-border/20 shadow-lg p-6 md:p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full blur-xl" />
              
              <div className="relative z-10">
                <div className="mb-6">
                  <h4 className="text-2xl font-bold mb-2 text-foreground">Premium</h4>
                  <div className="flex items-baseline justify-center gap-2 mb-4">
                    <span className="text-4xl font-bold text-foreground">$2,499</span>
                    <span className="text-lg text-muted-foreground">one-time</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Full AI transformation for your business</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  {[
                    "6 30-minute consulting sessions",
                    "100 customized prompts",
                    "5 custom GPTs",
                    "Setting up AI-powered organization", 
                    "AI integration across all verticals",
                    "Can layer over $299 subscription",
                    "Priority email support"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0" />
                      <span className="text-left text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-sm px-6 py-3 transition-all duration-300"
                  onClick={() => window.open("https://calendly.com/advisorxai/30min", "_blank", "noopener,noreferrer")}
                >
                  Contact Sales
                </Button>
                
                <p className="text-xs text-muted-foreground mt-3 text-center">
                  Enterprise-grade AI implementation
                </p>
              </div>
            </motion.div>

          </div>
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
              Close the loop from
              <br className="hidden md:block" /> prospects to paying clients
            </h3>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center gap-4 md:mt-8"
            >
              <Button 
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm md:text-lg px-8 py-6 shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all duration-300"
                onClick={() => window.open("https://calendly.com/advisorxai/30min", "_blank", "noopener,noreferrer")}
              >
                Schedule Demo
                <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button
                variant="outline"
                className="text-sm md:text-lg px-8 py-6 border-border hover:bg-accent transition-all duration-300 group"
                onClick={() => window.open("https://calendly.com/advisorxai/30min", "_blank", "noopener,noreferrer")}
              >
                Contact Sales
              </Button>
            </motion.div>

            {/* Premium Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12 text-sm text-gray-600"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>30-day money back guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>No setup fees or contracts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Cancel anytime</span>
              </div>
            </motion.div>

            {/* Security and Compliance - Accurate claims only */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-500"
            >
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-green-500/10 flex items-center justify-center">
                  <div className="w-2 h-2 rounded bg-green-500"></div>
                </div>
                <span>256-bit SSL Encryption</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-blue-500/10 flex items-center justify-center">
                  <div className="w-2 h-2 rounded bg-blue-500"></div>
                </div>
                <span>Secure Data Processing</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-purple-500/10 flex items-center justify-center">
                  <div className="w-2 h-2 rounded bg-purple-500"></div>
                </div>
                <span>Privacy Protected</span>
              </div>
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
                <span className="text-sm md:text-lg">60-day money back guarantee</span>
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
