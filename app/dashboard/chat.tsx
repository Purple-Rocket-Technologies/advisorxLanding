"use client";

import React, { useState } from "react";
import type { JSX } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Send,
  Bot,
  User,
  Loader2,
  History,
  Plus,
  Search,
  Image as ImageIcon,
  FileText,
  Youtube,
  Globe,
  ChevronDown,
  Settings,
  Linkedin,
  LineChart,
  Video,
  PenTool,
  Mail,
  Twitter,
  Shield,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Message {
  role: "assistant" | "user";
  content: string;
}

interface Agent {
  id: string;
  name: string;
  icon: JSX.Element;
}

const agents: Agent[] = [
  { id: "seo", name: "SEO Agent", icon: <Search className="h-4 w-4 mr-2" /> },
  {
    id: "linkedin",
    name: "LinkedIn Agent",
    icon: <Linkedin className="h-4 w-4 mr-2" />,
  },
  {
    id: "market",
    name: "Market Commentary Agent",
    icon: <LineChart className="h-4 w-4 mr-2" />,
  },
  {
    id: "youtube",
    name: "YouTube Transcripts Agent",
    icon: <Video className="h-4 w-4 mr-2" />,
  },
  {
    id: "blog",
    name: "Blog Agent",
    icon: <PenTool className="h-4 w-4 mr-2" />,
  },
  {
    id: "newsletter",
    name: "Newsletter Agent",
    icon: <Mail className="h-4 w-4 mr-2" />,
  },
  {
    id: "twitter",
    name: "X/Twitter Agent",
    icon: <Twitter className="h-4 w-4 mr-2" />,
  },
  {
    id: "sec",
    name: "SEC Compliance Agent",
    icon: <Shield className="h-4 w-4 mr-2" />,
  },
];

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState<Agent>(agents[0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    setTimeout(() => {
      const aiMessage: Message = {
        role: "assistant",
        content: `[${selectedAgent.name}] This is a simulated response. Replace with actual AI integration.`,
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-[calc(80vh-3rem)] ">
      {/* Top Navigation */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            className="text-muted-foreground hover:text-foreground"
          >
            <Plus className="w-5 h-5 mr-2" />
            New Chat
          </Button>
          <Button
            variant="ghost"
            className="text-muted-foreground hover:text-foreground"
          >
            <History className="w-5 h-5 mr-2" />
            History
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-foreground">New Conversation</span>
          <Button variant="ghost" size="icon">
            <Settings className="w-5 h-5 text-muted-foreground" />
          </Button>
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex items-start gap-3 ${
              message.role === "assistant" ? "justify-start" : "justify-end"
            }`}
          >
            {message.role === "assistant" && (
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Bot className="w-5 h-5 text-primary" />
              </div>
            )}
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                message.role === "assistant"
                  ? "bg-muted text-foreground rounded-tl-none"
                  : "bg-primary text-primary-foreground rounded-tr-none"
              }`}
            >
              <p className="text-sm">{message.content}</p>
            </div>
            {message.role === "user" && (
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <User className="w-5 h-5 text-primary" />
              </div>
            )}
          </div>
        ))}
        {isLoading && (
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <Loader2 className="w-5 h-5 text-primary animate-spin" />
            </div>
            <div className="bg-muted text-foreground rounded-2xl rounded-tl-none px-4 py-2">
              <p className="text-sm">Thinking...</p>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Input Area */}
      <div className="p-4 border-t border-border space-y-4">
        {/* Source Selection */}
        <div className="flex gap-2 px-2">
          <Button
            variant="ghost"
            className="text-muted-foreground hover:text-foreground"
          >
            <Globe className="w-4 h-4 mr-2" />
            Web Source
          </Button>
          <Button
            variant="ghost"
            className="text-muted-foreground hover:text-foreground"
          >
            <Youtube className="w-4 h-4 mr-2" />
            YouTube
          </Button>
          <Button
            variant="ghost"
            className="text-muted-foreground hover:text-foreground"
          >
            <FileText className="w-4 h-4 mr-2" />
            Document
          </Button>
          <Button
            variant="ghost"
            className="text-muted-foreground hover:text-foreground"
          >
            <ImageIcon className="w-4 h-4 mr-2" />
            Image
          </Button>
        </div>

        {/* Input Form */}
        <div className="flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="text-foreground border-border bg-card flex items-center gap-2 min-w-[200px]"
              >
                {selectedAgent.icon}
                {selectedAgent.name}
                <ChevronDown className="w-4 h-4 ml-auto" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="w-[200px] bg-card border-border"
            >
              {agents.map((agent) => (
                <DropdownMenuItem
                  key={agent.id}
                  onClick={() => setSelectedAgent(agent)}
                  className="text-foreground hover:bg-muted cursor-pointer flex items-center gap-2"
                >
                  {agent.icon}
                  {agent.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <form onSubmit={handleSubmit} className="flex gap-2 flex-1">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 bg-card border-border text-foreground placeholder:text-muted-foreground"
            />
            <Button
              type="submit"
              className="bg-primary hover:bg-primary/90"
              disabled={isLoading || !input.trim()}
            >
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;
