"use client";

import React from "react";
import { Shield, Users, BarChart3, Linkedin } from "lucide-react";

interface AgentIconProps {
  type: "users" | "shield" | "chart" | "linkedin";
}

const iconMap = {
  users: Users,
  shield: Shield,
  chart: BarChart3,
  linkedin: Linkedin,
};

export const AgentIcon = ({ type }: AgentIconProps) => {
  const Icon = iconMap[type];
  return <Icon className="w-6 h-6 text-primary" />;
};
