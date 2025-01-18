"use client";

import React from "react";
import {
  Home,
  MessageSquare,
  Wand2,
  Calendar,
  FolderKanban,
  Shield,
  User,
  Crown,
  ChevronRight,
} from "lucide-react";

const menuItems = [
  { id: "home" as const, icon: Home, label: "Home" },
  { id: "chat" as const, icon: MessageSquare, label: "Chat" },
  { id: "agent-builder" as const, icon: Wand2, label: "Agent Builder" },
  { id: "post-scheduling" as const, icon: Calendar, label: "Post Scheduling" },
  { id: "projects" as const, icon: FolderKanban, label: "Projects" },
  { id: "compliance" as const, icon: Shield, label: "Compliance" },
] as const;

type MenuItem = (typeof menuItems)[number];
type MenuItemId = MenuItem["id"];

export interface SidebarProps {
  activeComponent: MenuItemId;
  setActiveComponent: (id: MenuItemId) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeComponent,
  setActiveComponent,
}) => {
  return (
    <div className="w-64 min-h-full bg-card/40 border-r border-border p-4 z-50 flex flex-col justify-between">
      {/* Logo */}
      <div>
        <div className="flex items-center gap-2 px-4 py-2 mb-6">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <span className="text-primary font-semibold">A</span>
          </div>
          <span className="font-semibold text-foreground">AdvisorX</span>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col gap-1.5">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveComponent(item.id)}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all hover:translate-x-1 ${
                  activeComponent === item.id
                    ? "bg-primary/10 text-black dark:text-white dark:bg-primary/20 font-medium"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* User Profile and Plan */}
      <div className="mt-auto pt-4 border-t border-border">
        <button className="w-full flex items-center gap-3 p-2 rounded-xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent hover:from-primary/20 hover:via-primary/10 hover:to-transparent transition-all duration-300">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center ring-1 ring-primary/10">
              <User className="w-5 h-5 text-primary" />
            </div>
            <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary flex items-center justify-center ring-2 ring-background">
              <Crown className="w-3 h-3 text-primary-foreground" />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start">
            <span className="text-sm font-medium text-foreground">
              John Doe
            </span>
            <span className="text-xs text-muted-foreground">Pro Plan</span>
          </div>
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
