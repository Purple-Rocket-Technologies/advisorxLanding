import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Clock, Users, Shield } from "lucide-react";

const BenefitCard = ({
  title,
  subtitle,
  metric,
  icon: Icon,
}: {
  title: string;
  subtitle: string;
  metric: string;
  icon: React.ElementType;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{
      scale: 1.02,
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.08)",
    }}
    transition={{ duration: 0.3 }}
    className="group relative overflow-hidden bg-gradient-to-br from-white via-primary-50 to-secondary-50 p-8 rounded-2xl border border-primary-200 shadow-lg shadow-primary-500/5"
  >
    <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-primary/10 blur-2xl" />
    <div className="absolute -left-8 -top-8 w-32 h-32 rounded-full bg-secondary/10 blur-2xl" />

    <div className="flex justify-center mb-6">
      <div className="p-3 bg-gradient-to-br from-primary to-primary rounded-xl shadow-sm">
        <Icon className="text-white w-5 h-5" />
      </div>
    </div>

    <h3 className="text-primary font-semibold text-xl mb-2 text-center">
      {title}
    </h3>
    <p className="text-primary text-sm mb-6 leading-relaxed text-center">
      {subtitle}
    </p>

    <div className="flex items-center justify-center">
      <div className="flex items-center gap-2 bg-gradient-to-r from-primary to-primary border border-secondary p-2.5 rounded-lg shadow-sm">
        <Sparkles className="text-white w-4 h-4" />
        <span className="text-white font-medium text-sm">{metric}</span>
      </div>
    </div>
  </motion.div>
);

const BenefitsSection = () => {
  const benefits = [
    {
      title: "For Client Relationships",
      subtitle: "Content that sounds like you",
      metric: "2x faster content creation",
      icon: Clock,
    },
    {
      title: "For Practice Management",
      subtitle: "Marketing department in a box",
      metric: "50% time saved on marketing tasks",
      icon: Users,
    },
    {
      title: "For Compliance",
      subtitle: "SEC/FINRA marketing reviews",
      metric: "75% faster compliance reviews",
      icon: Shield,
    },
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary-100/20 to-secondary-100/20" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h3 className="text-4xl max-w-[80%] mx-auto md:text-6xl font-bold mb-6 bg-gradient-to-br from-secondary via-cyan-700 to-primary bg-clip-text text-transparent pb-2">
            Run your firm&apos;s marketing in half the time
          </h3>
          <p className="text-base max-w-[80%] md:text-xl text-gray-700 font-medium md:max-w-3xl mx-auto">
            AI that handles marketing, client engagement and compliance, so you
            can focus on what you do best
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
