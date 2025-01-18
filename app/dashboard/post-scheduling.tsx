"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Plus,
  Calendar as CalendarIcon,
  Image as ImageIcon,
  Link,
  Linkedin,
  Instagram,
  Twitter,
  MessageCircle,
  Clock,
  Globe,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface Platform {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  maxLength?: number;
}

const platforms: Platform[] = [
  {
    id: "linkedin",
    name: "LinkedIn",
    icon: <Linkedin className="w-5 h-5" />,
    color: "#0A66C2",
    maxLength: 3000,
  },
  {
    id: "instagram",
    name: "Instagram",
    icon: <Instagram className="w-5 h-5" />,
    color: "#E4405F",
    maxLength: 2200,
  },
  {
    id: "twitter",
    name: "Twitter",
    icon: <Twitter className="w-5 h-5" />,
    color: "#1DA1F2",
    maxLength: 280,
  },
  {
    id: "reddit",
    name: "Reddit",
    icon: <MessageCircle className="w-5 h-5" />,
    color: "#FF4500",
    maxLength: 40000,
  },
];

const PostScheduling = () => {
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [postContent, setPostContent] = useState("");
  const [postImage, setPostImage] = useState<string | null>(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      year: "numeric",
    }).format(date);
  };

  const isToday = (day: number) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      currentDate.getMonth() === today.getMonth() &&
      currentDate.getFullYear() === today.getFullYear()
    );
  };

  const isSelected = (day: number) => {
    return (
      selectedDate &&
      day === selectedDate.getDate() &&
      currentDate.getMonth() === selectedDate.getMonth() &&
      currentDate.getFullYear() === selectedDate.getFullYear()
    );
  };

  const changeMonth = (offset: number) => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + offset, 1)
    );
  };

  const togglePlatform = (platformId: string) => {
    setSelectedPlatforms((prev) =>
      prev.includes(platformId)
        ? prev.filter((id) => id !== platformId)
        : [...prev, platformId]
    );
  };

  return (
    <div className="h-[calc(100vh-2rem)] overflow-y-auto flex gap-6">
      {/* Left Column - Post Creation and Previews */}
      <div className="w-[60%] space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">
              Post Scheduling
            </h1>
            <p className="text-muted-foreground">
              Create and schedule posts across platforms
            </p>
          </div>
          <Button className="bg-primary hover:bg-primary/90 flex items-center gap-2">
            <Plus className="w-5 h-5" />
            New Post
          </Button>
        </div>

        {/* Platform Selection */}
        <div className="bg-card rounded-xl border border-border p-6">
          <h2 className="text-foreground font-semibold mb-4">
            Select Platforms
          </h2>
          <div className="flex gap-3">
            {platforms.map((platform) => (
              <button
                key={platform.id}
                onClick={() => togglePlatform(platform.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${
                  selectedPlatforms.includes(platform.id)
                    ? `border-primary bg-primary/10 text-foreground`
                    : "border-border text-muted-foreground hover:border-border/80"
                }`}
              >
                {platform.icon}
                {platform.name}
              </button>
            ))}
          </div>
        </div>

        {/* Post Creation */}
        <div className="bg-card rounded-xl border border-border p-6">
          <h2 className="text-foreground font-semibold mb-4">Create Post</h2>
          <div className="space-y-4">
            <textarea
              placeholder="What would you like to share?"
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
              className="w-full h-32 bg-muted text-foreground rounded-lg p-4 border border-border focus:outline-none focus:border-primary/50 resize-none placeholder:text-muted-foreground"
            />
            <div className="flex gap-3">
              <Button
                variant="outline"
                className="text-muted-foreground hover:text-foreground"
              >
                <ImageIcon className="w-5 h-5 mr-2" />
                Add Image
              </Button>
              <Button
                variant="outline"
                className="text-muted-foreground hover:text-foreground"
              >
                <Link className="w-5 h-5 mr-2" />
                Add Link
              </Button>
            </div>
          </div>
        </div>

        {/* Platform Previews */}
        {selectedPlatforms.length > 0 && (
          <div className="bg-card rounded-xl border border-border p-6">
            <h2 className="text-foreground font-semibold mb-4">Preview</h2>
            <div className="space-y-6">
              {selectedPlatforms.map((platformId) => {
                const platform = platforms.find((p) => p.id === platformId)!;
                return (
                  <div
                    key={platform.id}
                    className="border border-border rounded-lg p-4"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      {platform.icon}
                      <span className="text-foreground font-medium">
                        {platform.name}
                      </span>
                    </div>
                    <div className="text-muted-foreground">
                      {postContent || "Your post preview will appear here"}
                    </div>
                    {platform.maxLength && (
                      <div className="mt-2 text-sm text-muted-foreground">
                        {postContent.length}/{platform.maxLength} characters
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Right Column - Calendar */}
      <div className="flex-1 bg-card rounded-xl border border-border p-6">
        {/* Calendar Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <h2 className="text-foreground font-semibold">Schedule</h2>
            <div className="flex items-center gap-2">
              <button
                onClick={() => changeMonth(-1)}
                className="p-1 hover:bg-muted rounded-lg"
              >
                <ChevronLeft className="w-4 h-4 text-muted-foreground" />
              </button>
              <span className="text-foreground min-w-[140px] text-center font-medium">
                {formatDate(currentDate)}
              </span>
              <button
                onClick={() => changeMonth(1)}
                className="p-1 hover:bg-muted rounded-lg"
              >
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>Timezone: EST</span>
          </div>
        </div>

        {/* Calendar */}
        <div className="bg-muted/50 rounded-lg p-4">
          {/* Weekday Headers */}
          <div className="grid grid-cols-7 mb-2">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div
                key={day}
                className="text-center text-muted-foreground text-sm py-2 font-medium"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: 42 }).map((_, index) => {
              const dayNumber = index - getFirstDayOfMonth(currentDate) + 1;
              const isValidDay =
                dayNumber > 0 && dayNumber <= getDaysInMonth(currentDate);

              return (
                <div
                  key={index}
                  className={`relative ${
                    !isValidDay && "pointer-events-none opacity-0"
                  }`}
                >
                  {isValidDay && (
                    <button
                      onClick={() => {
                        setSelectedDate(
                          new Date(
                            currentDate.getFullYear(),
                            currentDate.getMonth(),
                            dayNumber
                          )
                        );
                      }}
                      className={`
                        w-full aspect-square rounded-lg flex flex-col items-center justify-center
                        relative group transition-colors
                        ${
                          isToday(dayNumber)
                            ? "bg-primary text-primary-foreground"
                            : isSelected(dayNumber)
                            ? "bg-primary/20 text-foreground"
                            : "text-muted-foreground hover:bg-muted"
                        }
                      `}
                    >
                      <span className="text-sm font-medium">{dayNumber}</span>

                      {/* Post Indicators */}
                      {dayNumber % 3 === 0 && (
                        <div className="flex gap-1 mt-1">
                          {selectedPlatforms.map((platform) => (
                            <div
                              key={platform}
                              className="w-1 h-1 rounded-full bg-primary"
                            />
                          ))}
                        </div>
                      )}
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Scheduled Posts */}
        <div className="mt-6">
          <h3 className="text-muted-foreground text-sm font-medium mb-3">
            Upcoming Posts
          </h3>
          <div className="space-y-2">
            {selectedPlatforms.map((platformId) => {
              const platform = platforms.find((p) => p.id === platformId)!;
              return (
                <div
                  key={platformId}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted"
                >
                  <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                    {platform.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-foreground text-sm">
                        {platform.name}
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                        Draft
                      </span>
                    </div>
                    <span className="text-muted-foreground text-sm">
                      {selectedDate
                        ? selectedDate.toLocaleDateString()
                        : "Not scheduled"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostScheduling;
