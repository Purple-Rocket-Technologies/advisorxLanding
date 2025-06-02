"use client";

import React from "react";
import { motion } from "framer-motion";

const WhyItMatters = () => {
  const metrics = [
    {
      value: "5-12%",
      label: "Reply Rate",
      description: "Average response rate",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      value: "10-30%",
      label: "Interested",
      description: "Of replies show interest",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      value: "0.5-3%",
      label: "Net Positive",
      description: "Convert to qualified leads",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      value: "Better",
      label: "Coverage",
      description: "More decision-maker emails",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="w-full py-24 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-black mb-8 bg-gradient-to-b from-secondary via-cyan-800 to-primary bg-clip-text text-transparent"
          >
            Why it Matters
          </motion.h2>
          
          {/* Premium value proposition without icons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto relative"
          >
            <div className="relative group">
              {/* Premium glass effect container */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-3xl blur-sm opacity-60 group-hover:opacity-100 transition duration-500"></div>
              
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
                <div className="space-y-6">
                  <div className="inline-block">
                    <span className="text-sm font-semibold text-primary uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full">
                      Our Secret Sauce
                    </span>
                  </div>
                  
                  <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-medium">
                    We deliver{" "}
                    <span className="font-bold text-white bg-gradient-to-r from-primary to-secondary px-4 py-2 rounded-xl shadow-lg">
                      superior coverage
                    </span>
                    {" "}of decision-maker emails compared to other solutions,{" "}
                    <span className="font-bold text-white bg-gradient-to-r from-secondary to-primary px-4 py-2 rounded-xl shadow-lg">
                      delivering better results
                    </span>
                    {" "}for our clients
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Premium metrics grid without icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                {/* Gradient accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${metric.gradient} rounded-t-2xl`} />
                
                <div className="text-center space-y-4">
                  <div className={`text-4xl md:text-5xl font-black bg-gradient-to-r ${metric.gradient} bg-clip-text text-transparent`}>
                    {metric.value}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{metric.label}</h3>
                    <p className="text-sm text-gray-600">{metric.description}</p>
                  </div>
                </div>
                
                {/* Subtle hover effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${metric.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;
