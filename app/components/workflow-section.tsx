"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import {
  Book,
  Calendar,
  Globe,
  Shield,
  PenTool,
  Settings,
  Users,
  Target,
  BrainCircuit,
  PencilRuler,
  Share2,
  Newspaper,
  ScrollText,
  Megaphone,
  LayoutTemplate,
} from "lucide-react";
import Image from "next/image";
import { Button } from "./moving-border";

const inputSources = [
  { title: "Brand Guidelines", icon: PenTool },
  { title: "CRM Notes", icon: Users },
  { title: "Web Sources", icon: Globe },
  { title: "Documents", icon: ScrollText },
  { title: "Brand Colors", icon: PencilRuler },
] as const;

const crmIntegrations = [
  {
    title: "LinkedIn",
    logo: "/logos/linkedin.svg",
    comingSoon: false,
  },
  {
    title: "Wealthbox",
    logo: "/logos/wealthbox.svg",
    comingSoon: false,
  },
  {
    title: "Redtail",
    logo: "/logos/redtail.svg",
    comingSoon: true,
  },
  {
    title: "Salesforce",
    logo: "/logos/salesforce.svg",
    comingSoon: true,
  },
  {
    title: "Practifi",
    logo: "/logos/practifi.svg",
    comingSoon: true,
  },
] as const;

const capabilities = [
  { title: "Growth Analytics", icon: Target },
  { title: "On-Brand Content", icon: LayoutTemplate },
  { title: "Compliance Reviews", icon: Shield },
  { title: "Schedule Posts", icon: Calendar },
  { title: "Engaging Visuals", icon: BrainCircuit },
] as const;

const crmLogos = [
  "/logos/wealthbox.svg",
  "/logos/redtail.svg",
  "/logos/salesforce.svg",
] as const;

const outputTypes = [
  { title: "LinkedIn Posts", icon: Share2 },
  { title: "Newsletters", icon: ScrollText },
  { title: "Whitepapers", icon: Book },
  { title: "Articles", icon: Newspaper },
  { title: "Ad Copy", icon: Megaphone },
  { title: "& More", icon: Settings },
] as const;

interface Connection {
  id: string;
  start: { x: number; y: number };
  end: { x: number; y: number };
}

const FlowPath = React.memo<Connection>(({ start, end }) => {
  const path = `M ${start.x} ${start.y} Q ${(start.x + end.x) / 2} ${start.y} ${
    end.x
  } ${end.y}`;

  return (
    <motion.path
      d={path}
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      stroke="url(#glowGradient)"
      strokeWidth="3"
      filter="url(#glow)"
      fill="none"
      strokeLinecap="round"
      style={{
        willChange: "opacity, stroke-dashoffset",
        transform: "translate3d(0,0,0)",
      }}
    />
  );
});

FlowPath.displayName = "FlowPath";

const InputCard = React.memo(
  ({
    item,
    innerRef,
  }: {
    item: (typeof inputSources)[number];
    innerRef: (node: HTMLDivElement | null) => void;
  }) => {
    const Icon = item.icon;
    return (
      <motion.div
        ref={innerRef}
        whileHover={{ x: 10 }}
        className="w-full h-[120px] max-w-[280px] px-6 flex flex-row items-center gap-4 text-muted-foreground rounded-xl border border-border/50 backdrop-blur-md backdrop-saturate-150 transition-all duration-300 transform-gpu will-change-transform bg-background/80 shadow-sm"
        style={{
          transform: "translate3d(0,0,0)",
        }}
      >
        {item.title === "CRM Notes" ? (
          <div className="flex -space-x-2">
            {crmLogos.map((logo, i) => (
              <div
                key={logo}
                className="w-8 h-8 rounded-lg bg-primary/10 p-1.5 relative"
                style={{ zIndex: crmLogos.length - i }}
              >
                <Image
                  src={logo}
                  alt="CRM Logo"
                  width={20}
                  height={20}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="w-10 h-10 transform-gpu p-2 rounded-lg bg-primary/10">
            <Icon className="w-full h-full stroke-primary stroke-[1.5]" />
          </div>
        )}
        <span className="text-lg font-semibold text-foreground">
          {item.title}
        </span>
      </motion.div>
    );
  }
);

InputCard.displayName = "InputCard";

const IntegrationCard = React.memo(
  ({
    item,
    innerRef,
  }: {
    item: (typeof crmIntegrations)[number];
    innerRef: (node: HTMLDivElement | null) => void;
  }) => {
    return (
      <motion.div
        ref={innerRef}
        whileHover={{ x: -10 }}
        className="w-full h-[120px] max-w-[280px] px-6 flex flex-row items-center gap-4 text-muted-foreground rounded-xl border border-border backdrop-blur-md backdrop-saturate-150 transition-all duration-300 transform-gpu will-change-transform bg-card/50 relative"
        style={{
          transform: "translate3d(0,0,0)",
        }}
      >
        {item.comingSoon && (
          <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
            Coming Soon
          </div>
        )}
        <div className="w-10 h-10 transform-gpu p-2 rounded-lg bg-primary/10">
          <Image
            src={item.logo}
            alt={`${item.title} logo`}
            width={32}
            height={32}
            className="w-8 h-8 object-contain"
          />
        </div>
        <span className="text-lg font-semibold text-foreground">
          {item.title}
        </span>
      </motion.div>
    );
  }
);

IntegrationCard.displayName = "IntegrationCard";

const OutputCard = React.memo(
  ({
    item,
    innerRef,
  }: {
    item: (typeof outputTypes)[number];
    innerRef: (node: HTMLDivElement | null) => void;
  }) => {
    const Icon = item.icon;
    return (
      <motion.div
        ref={innerRef}
        whileHover={{ x: -10 }}
        className="w-full h-[120px] max-w-[280px] px-6 flex flex-row items-center gap-4 text-muted-foreground rounded-xl border border-border/50 backdrop-blur-md backdrop-saturate-150 transition-all duration-300 transform-gpu will-change-transform bg-background/80 shadow-sm"
        style={{
          transform: "translate3d(0,0,0)",
        }}
      >
        <div className="w-10 h-10 transform-gpu p-2 rounded-lg bg-primary/10">
          <Icon className="w-full h-full stroke-primary stroke-[1.5]" />
        </div>
        <span className="text-lg font-semibold text-foreground">
          {item.title}
        </span>
      </motion.div>
    );
  }
);

OutputCard.displayName = "OutputCard";


const WorkflowSection: React.FC = () => {
  const [connections, setConnections] = useState<Connection[]>([]);
  const [currentIntegrationIndex, setCurrentIntegrationIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const aiHubRef = useRef<HTMLDivElement>(null);

  // Create refs for input sources and integrations
  const inputRefs = useRef<(HTMLDivElement | null)[]>([]);
  const integrationRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Initialize refs
  if (inputRefs.current.length === 0) {
    inputRefs.current = Array(inputSources.length).fill(null);
  }
  if (integrationRefs.current.length === 0) {
    integrationRefs.current = Array(crmIntegrations.length).fill(null);
  }

  const cardRefs = {
    input: inputRefs.current,
    integration: integrationRefs.current,
  };

  const getRandomIndices = (max: number, count: number) => {
    const indices = new Set<number>();
    while (indices.size < count) {
      indices.add(Math.floor(Math.random() * max));
    }
    return Array.from(indices);
  };

  const createConnections = useCallback(() => {
    if (!aiHubRef.current || !sectionRef.current) return;

    const sectionRect = sectionRef.current.getBoundingClientRect();
    const hubRect = aiHubRef.current.getBoundingClientRect();

    const hubCenter = {
      x: hubRect.left - sectionRect.left + hubRect.width / 2,
      y: hubRect.top - sectionRect.top + hubRect.height / 2,
    };

    // Randomly select 2-3 input sources
    const numInputs = Math.random() > 0.5 ? 2 : 3;
    const selectedInputIndices = getRandomIndices(
      inputSources.length,
      numInputs
    );

    const inputConnections = selectedInputIndices
      .map((index) => {
        const inputRef = cardRefs.input[index];
        if (!inputRef) return null;

        const inputRect = inputRef.getBoundingClientRect();
        return {
          id: `input-${index}-${Date.now()}`,
          start: {
            x: inputRect.right - sectionRect.left,
            y: inputRect.top - sectionRect.top + inputRect.height / 2,
          },
          end: hubCenter,
        };
      })
      .filter(Boolean) as Connection[];

    // Create CRM connection
    const outputRef = cardRefs.integration[currentIntegrationIndex];
    if (!outputRef) return;

    const outputRect = outputRef.getBoundingClientRect();
    const outputConnection = {
      id: `crm-${Date.now()}`,
      start: hubCenter,
      end: {
        x: outputRect.left - sectionRect.left,
        y: outputRect.top - sectionRect.top + outputRect.height / 2,
      },
    };

    setConnections([...inputConnections, outputConnection]);

    setTimeout(() => {
      setConnections([]);
      setCurrentIntegrationIndex((prev) => (prev + 1) % crmIntegrations.length);
    }, 3000);
  }, [currentIntegrationIndex, cardRefs.input, cardRefs.integration]);

  useEffect(() => {
    const interval = setInterval(createConnections, 5000);
    setTimeout(createConnections, 1000);
    return () => clearInterval(interval);
  }, [createConnections]);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-background relative w-full overflow-hidden flex items-center justify-center min-h-screen"
    >
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
        <defs>
          <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#9640FF" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#9640FF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#9640FF" stopOpacity="0.15" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" />
          </filter>
        </defs>
        <AnimatePresence mode="wait">
          {connections.map((connection) => (
            <FlowPath key={connection.id} {...connection} />
          ))}
        </AnimatePresence>
      </svg>

      <div className="relative z-20 mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative items-stretch min-h-[800px]">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center justify-center h-full sticky top-24"
          >
            <div className="flex flex-col gap-4 items-center justify-between h-full py-8">
              {inputSources.map((item, index) => (
                <InputCard
                  key={item.title}
                  item={item}
                  innerRef={(node) => {
                    cardRefs.input[index] = node;
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Center Column */}
          <motion.div
            ref={aiHubRef}
            className="w-full flex items-center justify-center sticky top-24 h-full py-8"
            whileHover={{ scale: 1.03 }}
          >
            <Button
              as="div"
              borderRadius="16px"
              duration={8000}
              className="bg-background/95 text-foreground border-border/50 h-full shadow-md"
              containerClassName="w-full max-w-[400px] h-full"
            >
              <div className="flex flex-col h-full">
                <div className="flex-1 flex flex-col justify-between gap-4">
                  {capabilities.map((capability) => (
                    <div
                      key={capability.title}
                      className="group  flex items-center gap-3 px-10 py-10 rounded-xl hover:bg-primary/5 transition-all duration-300 transform-gpu will-change-transform justify-start bg-background/95 backdrop-blur-sm border border-border/50 shadow-sm"
                    >
                      <div className="w-6 h-6 transform-gpu">
                        <capability.icon className="w-full h-full stroke-primary opacity-70 group-hover:opacity-100 transition-opacity stroke-[1.5]" />
                      </div>
                      <span className="text-lg font-medium whitespace-nowrap text-foreground group-hover:text-primary transition-colors">
                        {capability.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Button>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-col items-center justify-center h-full sticky top-24"
          >
            <div className="flex flex-col gap-4 items-center justify-center h-full py-8">
              {outputTypes.map((item, index) => (
                <OutputCard
                  key={item.title}
                  item={item}
                  innerRef={(node) => {
                    cardRefs.integration[index] = node;
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
        {/* <div className="text-center mt-12">
          <p className="text-muted-foreground text-lg">And more features</p>
        </div> */}
      </div>
    </section>
  );
};

export default WorkflowSection;
