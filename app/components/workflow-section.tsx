import React, { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence, useAnimationControls } from "framer-motion";
import {
  Book,
  Calendar,
  Globe,
  Shield,
  PenTool,
  Users,
  Target,
  BrainCircuit,
  PencilRuler,
  Newspaper,
  ScrollText,
  Megaphone,
  Linkedin,
  LayoutTemplate,
  CheckCircle,
  Mail,
  LineChart,
  FileText,
  History,
  Users2,
  Share2,
  UserX,
  Sparkles,
  ShieldCheck,
  Palette,
} from "lucide-react";
import Image from "next/image";
import { Button } from "./moving-border";
import { cn } from "@/lib/utils";

// Original data arrays remain the same
const inputSources = [
  { title: "Upload Form ADV", icon: FileText },
  { title: "Past Content", icon: History },
  { title: "CRM/Meeting Notes", icon: Users2 },
  { title: "Social Media Accounts", icon: Share2 },
  //{ title: "Brand Colors", icon: PencilRuler },
  //{ title: "Image & Video Gallery", icon: Megaphone },
];

const outputTypes = [
  { title: "Anonymizes all client PII", icon: UserX },
  { title: "Real-time content suggestions", icon: Sparkles },
  { title: "Pre-checks for FINRA/SEC compliance", icon: ShieldCheck },
  { title: "Aligns content with brand guidelines", icon: Palette },
  //{ title: "SEO Specialist", icon: Megaphone },
  //{ title: "Social Media Manager", icon: Megaphone },
];

const capabilities = [
  { title: "Pre-approved content", icon: CheckCircle },
  { title: "Email nurturing campaigns", icon: Mail },
  //{ title: "On-Brand Content", icon: LayoutTemplate },
  { title: "Compliance audit trails", icon: Shield },
  { title: "Organic growth analytics", icon: LineChart },
  //{ title: "Cryptographic Verification", icon: BrainCircuit },
];

const crmLogos = [
  "/logos/wealthbox.svg",
  "/logos/redtail.svg",
  "/logos/salesforce.svg",
];

interface Connection {
  id: string;
  start: { x: number; y: number };
  end: { x: number; y: number };
}

interface FlowPathProps {
  start: { x: number; y: number };
  end: { x: number; y: number };
}

const FlowPath: React.FC<FlowPathProps> = React.memo(({ start, end }) => {
  const path = `M ${start.x} ${start.y} Q ${(start.x + end.x) / 2} ${start.y} ${end.x} ${end.y}`;
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

type IconComponent = React.FC<React.SVGProps<SVGSVGElement>>;

interface CardProps {
  item: {
    title: string;
    icon: IconComponent | string;
    isImage?: boolean;
  };
  innerRef?: React.Ref<HTMLDivElement>;
}

const InputCard: React.FC<CardProps> = React.memo(({ item, innerRef }) => {
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start({
      boxShadow: [
        "0 0 0 0 rgba(16, 222, 197, 0)",
        "0 0 20px 2px rgba(16, 222, 197, 0.2)",
        "0 0 0 0 rgba(16, 222, 197, 0)",
      ],
      transition: { duration: 2, repeat: Infinity },
    });
  }, [controls]);

  const Icon = item.icon as IconComponent;
  return (
    <motion.div
      ref={innerRef}
      animate={controls}
      whileHover={{
        x: 10,
        boxShadow: "0 0 25px 5px rgba(16, 222, 197, 0.3)",
        scale: 1.02,
      }}
      className="w-full h-[80px] max-w-[260px] px-4 flex flex-row items-center justify-between gap-3 text-muted-foreground rounded-xl border border-border/50 backdrop-blur-md backdrop-saturate-150 transition-all duration-300 transform-gpu will-change-transform bg-gradient-to-r from-cardBg to-cardBg/80"
      style={{ transform: "translate3d(0,0,0)" }}
    >
      {item.title === "CRM/Meeting Notes" ? (
        <div className="relative flex gap-1 max-w-1/2 bg-primary/5 rounded-lg p-1.5">
          {crmLogos.map((logo, i) => (
            <div
              key={logo}
              className="w-6 h-6 rounded-lg p-1 relative"
              style={{ zIndex: crmLogos.length - i }}
            >
              <Image
                src={logo}
                alt="CRM Logo"
                width={16}
                height={16}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="w-1/2 h-8 transform-gpu p-1.5 rounded-lg bg-primary/5">
          <Icon className="w-full h-full stroke-primary stroke-[1.5]" />
        </div>
      )}
      <span className="w-1/2 text-base font-light italic text-foreground">
        {item.title}
      </span>
    </motion.div>
  );
});
InputCard.displayName = "InputCard";

const OutputCard: React.FC<CardProps> = React.memo(({ item, innerRef }) => {
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start({
      boxShadow: [
        "0 0 0 0 rgba(16, 222, 197, 0)",
        "0 0 20px 2px rgba(16, 222, 197, 0.2)",
        "0 0 0 0 rgba(16, 222, 197, 0)",
      ],
      transition: { duration: 2, repeat: Infinity },
    });
  }, [controls]);

  const Icon = item.icon as IconComponent;
  return (
    <motion.div
      ref={innerRef}
      animate={controls}
      whileHover={{
        x: -10,
        boxShadow: "0 0 25px 5px rgba(16, 222, 197, 0.3)",
        scale: 1.02,
      }}
      className="w-full h-[80px] max-w-[320px] px-4 flex flex-row items-center gap-3 text-muted-foreground rounded-xl border border-border/50 backdrop-blur-md backdrop-saturate-150 transition-all duration-300 transform-gpu will-change-transform bg-gradient-to-r from-cardBg to-cardBg/80"
      style={{ transform: "translate3d(0,0,0)" }}
    >
      <div className="w-1/2 h-8 transform-gpu p-1.5 rounded-lg bg-primary/5">
        {item.isImage ? (
          <Image
            src="/logos/linkedin.svg"
            alt="LinkedIn"
            width={24}
            height={24}
            className="w-full h-full object-contain"
          />
        ) : (
          <Icon className="w-full h-full stroke-primary dark:stroke-[#8FFFCF] stroke-[1.5]" />
        )}
      </div>
      <span className="w-1/2 text-base font-light italic text-foreground">
        {item.title}
      </span>
    </motion.div>
  );
});
OutputCard.displayName = "OutputCard";

const WorkflowSection = () => {
  const [connections, setConnections] = useState<Connection[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const aiHubRef = useRef<HTMLDivElement | null>(null);
  const inputRefs = useRef<(HTMLDivElement | null)[]>([]);
  const outputRefs = useRef<(HTMLDivElement | null)[]>([]);

  if (inputRefs.current.length === 0) {
    inputRefs.current = Array(inputSources.length).fill(null);
  }
  if (outputRefs.current.length === 0) {
    outputRefs.current = Array(outputTypes.length).fill(null);
  }

  const getRandomIndices = (max: number, count: number): number[] => {
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

    const numInputs = Math.random() > 0.5 ? 2 : 3;
    const selectedInputIndices = getRandomIndices(
      inputSources.length,
      numInputs
    );

    const newConnections = [
      ...selectedInputIndices
        .map((index) => {
          const inputRef = inputRefs.current[index];
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
        .filter((connection): connection is Connection => connection !== null),
      {
        id: `output-${Date.now()}`,
        start: hubCenter,
        end: (() => {
          const outputRef = outputRefs.current[currentIndex];
          if (!outputRef) return hubCenter;
          const outputRect = outputRef.getBoundingClientRect();
          return {
            x: outputRect.left - sectionRect.left,
            y: outputRect.top - sectionRect.top + outputRect.height / 2,
          };
        })(),
      },
    ];

    setConnections(newConnections);
    setTimeout(() => {
      setConnections([]);
      setCurrentIndex((prev) => (prev + 1) % outputTypes.length);
    }, 3000);
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(createConnections, 5000);
    setTimeout(createConnections, 1000);
    return () => clearInterval(interval);
  }, [createConnections]);

  return (
    <section
      ref={sectionRef}
      className="min-h-fit bg-background relative w-full  flex flex-col items-center justify-start mb-24"
    >
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
        <defs>
          <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10dec5" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#10dec5" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#10dec5" stopOpacity="0.15" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" />
          </filter>
        </defs>
        <AnimatePresence mode="sync">
          {connections.map((connection) => (
            <FlowPath key={connection.id} {...connection} />
          ))}
        </AnimatePresence>
      </svg>

      <div className="flex flex-col items-center justify-start gap-4 mt-24">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            delay: 0.2,
          }}
          className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
        >
          Workflow
        </motion.span>
        <h3 className="text-center text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-br from-secondary via-cyan-700 to-primary bg-clip-text text-transparent pb-2">
          Personalized advisor marketing
          <br />
          that gleans from your CRM Notes.
        </h3>
        <p className="text-xl text-gray-700 font-medium max-w-3xl mx-auto mb-24">
          Our AI agent extracts your brand guidelines, anonymizes PII from your CRM and creates content to attract the ideal client to your website.
        </p>
      </div>

      <div className="relative z-20 mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative items-center h-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center gap-3"
          >
            <h4 className="text-xl font-semibold text-foreground mb-4">
              Bring Your Data
            </h4>
            {inputSources.map((item, index) => (
              <InputCard
                key={item.title}
                item={item}
                innerRef={(node) => {
                  inputRefs.current[index] = node;
                }}
              />
            ))}
          </motion.div>

          <div
            ref={aiHubRef}
            className="w-full flex flex-col items-center justify-center"
          >
            <h4 className="text-xl font-semibold text-foreground mb-4">
              AdvisorX AI Engine
            </h4>
            <Button
              as="div"
              borderRadius="16px"
              duration={8000}
              className={cn(
                "bg-gradient-to-br from-cardBg via-cardBg/90 to-cardBg/80",
                "text-foreground border-border/50 shadow-xl",
                "hover:shadow-primary/20 hover:shadow-2xl transition-shadow duration-500"
              )}
              containerClassName="w-full max-w-[360px]"
            >
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex flex-col gap-2 p-4"
              >
                {capabilities.map((capability, index) => (
                  <motion.div
                    key={capability.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-primary/5 transition-all duration-300 transform-gpu will-change-transform bg-background/95 backdrop-blur-sm border border-border/50 shadow-sm hover:shadow-lg hover:-translate-y-0.5"
                  >
                    <motion.div
                      className="w-6 h-6 transform-gpu"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <capability.icon className="w-full h-full opacity-70 group-hover:opacity-100 transition-opacity stroke-[1.5] group-hover:stroke-primary" />
                    </motion.div>
                    <span className="text-sm font-medium whitespace-nowrap text-foreground group-hover:text-primary transition-colors">
                      {capability.title}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-col items-center gap-3"
          >
            <h4 className="text-xl font-semibold text-foreground mb-4">
              Distribution
            </h4>
            {outputTypes.map((item, index) => (
              <OutputCard
                key={item.title}
                item={item}
                innerRef={(node) => {
                  outputRefs.current[index] = node;
                }}
              />
            ))}
            <div className="absolute -bottom-20 w-full h-[80px] max-w-[240px] px-4 flex items-center justify-center text-lg font-light italic text-muted-foreground opacity-75">
              & more...
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
