"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { BarChart3, TrendingUp, Users, Eye, LinkedinIcon } from "lucide-react";

const LinkedInDashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] text-center p-8 z-50">
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-[#0A66C2]/20 rounded-full"></div>
        <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#0A66C2] to-[#0A66C2]/50 p-[2px]">
          <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
            <LinkedinIcon className="w-8 h-8 text-[#0A66C2]" />
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-foreground mb-3">
        LinkedIn Analytics
      </h2>
      <p className="text-muted-foreground mb-8 max-w-md">
        Connect your LinkedIn account to view analytics and manage your
        professional presence
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full max-w-3xl mb-8">
        {[
          { icon: Eye, label: "Profile Views", value: "2.8k" },
          { icon: Users, label: "Connections", value: "164" },
          { icon: BarChart3, label: "Impressions", value: "24.5k" },
          { icon: TrendingUp, label: "Engagement", value: "5.2%" },
        ].map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="relative group transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex flex-col items-center p-4 rounded-xl bg-card border border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-2xl font-bold text-foreground mb-1">
                  {stat.value}
                </span>
                <span className="text-sm text-muted-foreground">
                  {stat.label}
                </span>
              </div>

              <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/30 to-primary/30 rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity"></div>
            </div>
          );
        })}
      </div>

      <Button className="bg-[#0A66C2] hover:bg-[#0A66C2]/90 text-white">
        Connect LinkedIn
      </Button>
    </div>
  );
};

export default LinkedInDashboard;
