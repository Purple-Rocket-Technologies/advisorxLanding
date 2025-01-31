"use client";

import React, { useState } from "react";
import { Sidebar } from "@/app/components/sidebar";
import LinkedInDashboard from "@/app/components/linkedin-dashboard";
import Chat from "./chat";
import AgentBuilder from "./agent-builder";
import Projects from "./projects";
import Compliance from "./compliance";
import PostScheduling from "./post-scheduling";
import { AnimatePresence, motion } from "framer-motion";

const components = {
  home: LinkedInDashboard,
  chat: Chat,
  "persona-builder": AgentBuilder,
  projects: Projects,
  compliance: Compliance,
  "post-scheduling": PostScheduling,
} as const;

type ComponentKey = keyof typeof components;

export const DashboardPage = () => {
  const [activeComponent, setActiveComponent] = useState<ComponentKey>("home");

  const ActiveComponent = components[activeComponent];

  return (
    <div className="hidden sm:flex min-h-[85vh] w-[80%] rounded-2xl bg-background relative -top-12 overflow-hidden shadow-xl border border-border">
      {/* Background Effects */}
      <div className="absolute w-full h-full">
        <motion.div
          className="absolute top-0 right-0 w-[500px] h-[500px]  bg-[#8987FF] opacity-20 rounded-full blur-[120px]"
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
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#09EF8D] opacity-20 rounded-full blur-[120px]"
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

      {/* Sidebar */}
      <Sidebar
        activeComponent={activeComponent}
        setActiveComponent={setActiveComponent}
      />

      {/* Main Content */}
      <main className="flex-1 p-8 pb-0 relative z-50">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeComponent}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="h-full"
          >
            <ActiveComponent />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default DashboardPage;
