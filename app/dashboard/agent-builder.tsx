"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Search,
  Linkedin,
  LineChart,
  Video,
  PenTool,
  Mail,
  Twitter,
  Shield,
  Plus,
  Settings,
  ArrowUpRight,
} from "lucide-react";

const agents = [
  {
    id: "seo",
    name: "SEO Agent",
    icon: <Search className="h-6 w-6" />,
    description:
      "Optimize content for search engines and generate SEO-friendly articles",
    status: "Active",
  },
  {
    id: "linkedin",
    name: "LinkedIn Agent",
    icon: <Linkedin className="h-6 w-6" />,
    description:
      "Create and manage professional LinkedIn content and engagement",
    status: "Active",
  },
  {
    id: "market",
    name: "Market Commentary Agent",
    icon: <LineChart className="h-6 w-6" />,
    description: "Generate market analysis and financial commentary",
    status: "Active",
  },
  {
    id: "youtube",
    name: "YouTube Transcripts Agent",
    icon: <Video className="h-6 w-6" />,
    description: "Process and analyze YouTube video transcripts",
    status: "Inactive",
  },
  {
    id: "blog",
    name: "Blog Agent",
    icon: <PenTool className="h-6 w-6" />,
    description: "Create engaging blog posts and articles",
    status: "Active",
  },
  {
    id: "newsletter",
    name: "Newsletter Agent",
    icon: <Mail className="h-6 w-6" />,
    description: "Design and write compelling newsletters",
    status: "Active",
  },
  {
    id: "twitter",
    name: "X/Twitter Agent",
    icon: <Twitter className="h-6 w-6" />,
    description: "Manage social media presence on X/Twitter",
    status: "Active",
  },
  {
    id: "sec",
    name: "SEC Compliance Agent",
    icon: <Shield className="h-6 w-6" />,
    description: "Ensure content compliance with SEC regulations",
    status: "Active",
  },
];

const AgentBuilder = () => {
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Agent Builder</h1>
          <p className="text-muted-foreground">
            Create and manage your AI agents
          </p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 flex items-center gap-2">
          <Plus className="w-5 h-5" />
          Create New Agent
        </Button>
      </div>

      {/* Agent Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {agents.map((agent) => (
          <div
            key={agent.id}
            className="group relative bg-card rounded-xl overflow-hidden"
          >
            {/* Gradient Border */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Card Content */}
            <div className="relative p-6 border border-border rounded-xl bg-card/50 backdrop-blur-sm h-full">
              {/* Status Indicator */}
              <div className="absolute top-6 right-6">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      agent.status === "Active" ? "bg-primary" : "bg-muted"
                    }`}
                  />
                  <span className="text-xs text-muted-foreground">
                    {agent.status}
                  </span>
                </div>
              </div>

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                {React.cloneElement(agent.icon, {
                  className: "text-primary",
                })}
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {agent.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-6 line-clamp-2">
                {agent.description}
              </p>

              {/* Actions */}
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  className="flex-1 bg-transparent border-border text-foreground hover:bg-muted flex items-center justify-center gap-2"
                >
                  Configure
                  <ArrowUpRight className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-muted-foreground hover:text-foreground hover:bg-muted"
                >
                  <Settings className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgentBuilder;
