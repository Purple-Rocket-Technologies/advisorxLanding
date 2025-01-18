"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, Mail, FileText, ChevronRight } from "lucide-react";

interface ComplianceItem {
  id: string;
  type: string;
  name: string;
  status: "Pending" | "In Review";
  date: string;
  assignee: string;
  content?: string;
  review?: string;
}

const complianceData: ComplianceItem[] = [
  {
    id: "1",
    type: "Email Campaign",
    name: "Q4 Market Update Email",
    status: "Pending",
    date: "2024-12-30",
    assignee: "John Smith",
    content:
      "Dear Valued Investors,\n\nAs we wrap up Q4 2024, we're pleased to share our market insights and portfolio performance updates. Our strategic positioning has yielded strong returns across multiple sectors...",
    review:
      "Review Summary:\n- Compliance Check: Passed\n- Risk Level: Low\n- Recommendations:\n  1. Add disclaimer about past performance\n  2. Include risk disclosure statement\n  3. Review market projections wording",
  },
  {
    id: "2",
    type: "Blog Post",
    name: "Retirement Planning Blog",
    status: "In Review",
    date: "2024-12-29",
    assignee: "Sarah Johnson",
    content:
      "Planning for retirement requires careful consideration of various factors including investment strategy, risk tolerance, and long-term financial goals...",
    review:
      "Review Summary:\n- Compliance Check: In Progress\n- Risk Level: Medium\n- Recommendations:\n  1. Verify investment advice disclaimers\n  2. Check regulatory citations\n  3. Review financial projections",
  },
];

const ComplianceItem = ({
  item,
  isSelected,
  onClick,
}: {
  item: ComplianceItem;
  isSelected: boolean;
  onClick: () => void;
}) => {
  const getStatusStyle = (status: ComplianceItem["status"]) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-500/20 text-yellow-500";
      case "In Review":
        return "bg-blue-500/20 text-blue-500";
      default:
        return "bg-muted text-foreground";
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "Email Campaign":
        return <Mail className="w-5 h-5 text-muted-foreground" />;
      default:
        return <FileText className="w-5 h-5 text-muted-foreground" />;
    }
  };

  return (
    <div
      className={`flex items-center gap-4 p-4 hover:bg-muted cursor-pointer border-b border-border group ${
        isSelected ? "bg-muted" : ""
      }`}
      onClick={onClick}
    >
      <div className="flex items-center gap-3 flex-1">
        {getIcon(item.type)}
        <div>
          <div className="flex items-center gap-3">
            <span className="text-muted-foreground text-sm">{item.type}</span>
            <span
              className={`text-xs px-2 py-0.5 rounded-full ${getStatusStyle(
                item.status
              )}`}
            >
              {item.status}
            </span>
          </div>
          <p className="text-foreground mt-1">{item.name}</p>
        </div>
      </div>
      <div className="flex items-center gap-8 text-sm text-muted-foreground">
        <span>{item.date}</span>
        <span>{item.assignee}</span>
      </div>
      <ChevronRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
};

const Compliance = () => {
  const [activeTab, setActiveTab] = useState<"Content" | "Compliance Review">(
    "Content"
  );
  const [selectedItem, setSelectedItem] = useState<ComplianceItem | null>(
    complianceData[0]
  );

  return (
    <div className="h-full flex gap-6">
      {/* Left Column - File List */}
      <div className="w-[45%]">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-foreground mb-6">
            Compliance Review
          </h1>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-muted text-foreground rounded-lg pl-10 pr-4 py-2 border border-border focus:outline-none focus:border-primary/50"
            />
          </div>
        </div>

        <div className="bg-card rounded-lg border border-border">
          {complianceData.map((item) => (
            <ComplianceItem
              key={item.id}
              item={item}
              isSelected={selectedItem?.id === item.id}
              onClick={() => setSelectedItem(item)}
            />
          ))}
        </div>
      </div>

      {/* Right Column - Content and Review */}
      {selectedItem && (
        <div className="flex-1">
          <div className="flex gap-6 mb-6 border-b border-border">
            {["Content", "Compliance Review"].map((tab) => (
              <button
                key={tab}
                className={`pb-3 px-1 text-sm ${
                  activeTab === tab
                    ? "text-foreground border-b-2 border-primary"
                    : "text-muted-foreground"
                }`}
                onClick={() =>
                  setActiveTab(tab as "Content" | "Compliance Review")
                }
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="bg-card rounded-lg border border-border p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-muted-foreground text-sm">
                {selectedItem.type}
              </span>
              <span
                className={`text-xs px-2 py-0.5 rounded-full ${
                  selectedItem.status === "Pending"
                    ? "bg-yellow-500/20 text-yellow-500"
                    : "bg-blue-500/20 text-blue-500"
                }`}
              >
                {selectedItem.status}
              </span>
            </div>
            <h2 className="text-xl font-semibold text-foreground mb-6">
              {selectedItem.name}
            </h2>
            <div className="text-muted-foreground whitespace-pre-line">
              {activeTab === "Content"
                ? selectedItem.content
                : selectedItem.review}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Compliance;
