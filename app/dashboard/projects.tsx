"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Folder,
  File,
  ChevronRight,
  ChevronDown,
  Plus,
  MoreVertical,
  Calendar,
  Users,
  Clock,
} from "lucide-react";

interface Project {
  id: string;
  name: string;
  type: "folder" | "file";
  status: "In Progress" | "Completed" | "On Hold";
  lastModified: string;
  team: string;
  children?: Project[];
}

const projectData: Project[] = [
  {
    id: "1",
    name: "Investment Strategies",
    type: "folder",
    status: "In Progress",
    lastModified: "2024-03-15",
    team: "Research Team",
    children: [
      {
        id: "1-1",
        name: "Q1 2024 Strategy",
        type: "file",
        status: "Completed",
        lastModified: "2024-03-10",
        team: "Research Team",
      },
      {
        id: "1-2",
        name: "Market Analysis",
        type: "folder",
        status: "In Progress",
        lastModified: "2024-03-12",
        team: "Research Team",
        children: [
          {
            id: "1-2-1",
            name: "Tech Sector Review",
            type: "file",
            status: "In Progress",
            lastModified: "2024-03-12",
            team: "Research Team",
          },
        ],
      },
    ],
  },
  {
    id: "2",
    name: "Client Communications",
    type: "folder",
    status: "In Progress",
    lastModified: "2024-03-14",
    team: "Communications",
    children: [
      {
        id: "2-1",
        name: "Newsletter Templates",
        type: "folder",
        status: "Completed",
        lastModified: "2024-03-13",
        team: "Communications",
        children: [
          {
            id: "2-1-1",
            name: "Monthly Update",
            type: "file",
            status: "Completed",
            lastModified: "2024-03-13",
            team: "Communications",
          },
        ],
      },
    ],
  },
  {
    id: "3",
    name: "Compliance Reports",
    type: "folder",
    status: "On Hold",
    lastModified: "2024-03-11",
    team: "Legal",
    children: [
      {
        id: "3-1",
        name: "Q1 Audit",
        type: "file",
        status: "On Hold",
        lastModified: "2024-03-11",
        team: "Legal",
      },
    ],
  },
];

const ProjectItem = ({
  project,
  level = 0,
}: {
  project: Project;
  level?: number;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasChildren = project.children && project.children.length > 0;

  const getStatusColor = (status: Project["status"]) => {
    switch (status) {
      case "In Progress":
        return "text-blue-500";
      case "Completed":
        return "text-green-500";
      case "On Hold":
        return "text-yellow-500";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <div>
      <div
        className={`group flex items-center gap-4 p-3 hover:bg-muted rounded-lg cursor-pointer`}
        onClick={() => setIsExpanded(!isExpanded)}
        style={{ paddingLeft: `${level * 24 + 12}px` }}
      >
        <div className="flex items-center gap-3 min-w-[300px]">
          {hasChildren ? (
            <button className="w-5 h-5 flex items-center justify-center rounded hover:bg-muted">
              {isExpanded ? (
                <ChevronDown className="w-4 h-4 text-muted-foreground" />
              ) : (
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              )}
            </button>
          ) : (
            <div className="w-5" />
          )}
          {project.type === "folder" ? (
            <Folder className="w-5 h-5 text-muted-foreground" />
          ) : (
            <File className="w-5 h-5 text-muted-foreground" />
          )}
          <span className="text-foreground">{project.name}</span>
        </div>

        <div className="flex items-center gap-8 text-sm text-muted-foreground flex-1">
          <div className={`min-w-[100px] ${getStatusColor(project.status)}`}>
            {project.status}
          </div>
          <div className="flex items-center gap-2 min-w-[120px]">
            <Calendar className="w-4 h-4" />
            {project.lastModified}
          </div>
          <div className="flex items-center gap-2 min-w-[120px]">
            <Users className="w-4 h-4" />
            {project.team}
          </div>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <MoreVertical className="w-4 h-4 text-muted-foreground" />
        </Button>
      </div>

      {isExpanded && hasChildren && (
        <div className="mt-1">
          {project.children?.map((child) => (
            <ProjectItem key={child.id} project={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

const Projects = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Projects</h1>
          <p className="text-muted-foreground">
            Manage and organize your projects
          </p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 flex items-center gap-2">
          <Plus className="w-5 h-5" />
          New Project
        </Button>
      </div>

      <div className="bg-card rounded-xl border border-border">
        <div className="flex items-center gap-4 p-4 border-b border-border text-sm text-muted-foreground">
          <div className="min-w-[300px]">Name</div>
          <div className="flex items-center gap-8 flex-1">
            <div className="min-w-[100px]">Status</div>
            <div className="min-w-[120px]">Last Modified</div>
            <div className="min-w-[120px]">Team</div>
          </div>
          <div className="w-10"></div>
        </div>

        <div className="p-2">
          {projectData.map((project) => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
