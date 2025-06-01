"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, TrendingUp, Mail, Users, Sparkles, Crown } from "lucide-react";

const WhyItMatters = () => {
  const stats = [
    {
      icon: Mail,
      title: "5-12% Reply Rate",
      description: "Average response rate",
      color: "text-blue-500"
    },
    {
      icon: Target,
      title: "10-30% Interested",
      description: "Of replies show interest",
      color: "text-green-500"
    },
    {
      icon: TrendingUp,
      title: "0.5-3% Net Positive",
      description: "Convert to qualified leads",
      color: "text-purple-500"
    },
    {
      icon: Users,
      title: "Better Coverage",
      description: "More decision-maker emails",
      color: "text-orange-500"
    }
  ];

  return (
    <section className="w-full py-20 bg-background relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-black mb-8 bg-gradient-to-b from-secondary via-cyan-800 to-primary bg-clip-text text-transparent"
          >
            Why it Matters
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-4xl mx-auto space-y-6"
          >
            {/* Highlight Box with Better UI */}
            <div className="relative group">
              {/* Animated Border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              
              {/* Main Content Box */}
              <div className="relative bg-white rounded-2xl p-8 border-2 border-transparent bg-clip-padding">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-2xl"></div>
                
                {/* Crown Icon */}
                <div className="relative flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center">
                      <Crown className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  {/* Text Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <Sparkles className="w-5 h-5 text-primary" />
                      <span className="text-sm font-semibold text-primary uppercase tracking-wide">Our Secret Sauce</span>
                    </div>
                    
                    <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-medium">
                      We get <span className="font-bold text-white bg-primary px-3 py-1 rounded-lg shadow-md">much more coverage</span> of decision-maker emails than other solutions, 
                      <span className="font-bold text-white bg-secondary px-3 py-1 rounded-lg shadow-md ml-2">delivering better results</span> for our clients
                    </p>
                    
                    {/* Decorative Elements */}
                    <div className="flex items-center gap-2 mt-6">
                      <motion.div 
                        className="w-2 h-2 bg-primary rounded-full"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                      />
                      <motion.div 
                        className="w-2 h-2 bg-secondary rounded-full"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                      />
                      <motion.div 
                        className="w-2 h-2 bg-primary rounded-full"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-white rounded-2xl p-6 border border-border/10 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:border-primary/20">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 flex items-center justify-center ${stat.color}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{stat.title}</h3>
                    <p className="text-sm text-muted-foreground">{stat.description}</p>
                  </div>
                </div>
                {/* Subtle glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;
