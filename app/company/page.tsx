"use client";
import NavBar from "../components/nav";
import Footer from "../components/footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Jonathan Michael",
    title: "CEO",
    image: "/images/jonathan.png",
    linkedin: "https://www.linkedin.com/in/jmjonathanmichael/",
  },
  {
    name: "Zach McCormick",
    title: "Head of AI",
    image: "/images/zach.png",
    linkedin: "https://www.linkedin.com/in/zach-mccormick-295a5953/",
  },
  {
    name: "Nick McCormick",
    title: "CTO",
    image: "/images/nick.png",
    linkedin: "https://www.linkedin.com/in/nick-mccormick-6813828b/",
  },
];

export default function CompanyPage() {
  return (
    <div className="w-full overflow-x-hidden bg-gradient-to-b from-white to-gray-50 relative">
      <NavBar />
      {/* Background pattern - keep at z-0 */}
      <div className="absolute inset-0 z-0 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#006e59_100%)]"></div>

      {/* Hero Section with Background - increase z-index */}
      <div className="relative min-h-[70vh] flex items-center justify-center rounded-lg bg-transparent z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 text-center px-4 md:px-8 max-w-5xl mx-auto pt-16"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-6xl font-black mb-6 tracking-tight relative z-10"
          >
            <span className="bg-gradient-to-r from-black via-teal-900 to-black bg-clip-text text-transparent">
              Our Story
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl text-black max-w-7xl font-light mx-auto leading-relaxed text-center relative z-10"
          >
            AdvisorX was founded in May of 2024 by multiple serial entrepreneurs
            with specialized experience in marketing technology, investment
            management and artificial intelligence. 2 of our 3 founders are
            Y-Combinator alumni featured on the YC top 100 AI startup companies
            list.{" "}
            <span className="font-semibold">
              Our mission is to enable financial advisors leverage AI to educate
              more American households with engaging educational content
            </span>{" "}
            We live in an age of content proliferation and brand differentiation
            is one of the core unique selling points that firms will have to
            adopt to stand out and attract their ideal clients. We believe AI
            presents a new opportunity for wealth management firms to achieve
            this consistently and compliantly.
          </motion.p>
        </motion.div>
      </div>

      {/* Team Section - ensure it's above background */}
      <div className="py-16 bg-transparent mb-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-16 text-center"
          >
            <span className="bg-gradient-to-r from-black via-teal-900 to-black bg-clip-text text-transparent font-black">
              Founding Team
            </span>
          </motion.h2>

          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 place-items-center">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group flex flex-col items-center bg-white p-8 rounded-2xl shadow-xl border border-gray-100 w-full hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-r from-primary via-teal-800 to-teal-950 rounded-t-2xl"></div>

                <motion.div
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    rotateX: 5,
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-28 h-28 rounded-full mb-6 flex items-center justify-center overflow-hidden z-10 ring-4 ring-white shadow-lg relative mt-6 bg-white"
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={150}
                    height={150}
                    className="w-full h-full aspect-square object-cover rounded-full relative top-2 bg-white"
                  />
                </motion.div>

                <h3 className="text-2xl font-bold mb-2 text-gray-800">
                  {member.name}
                </h3>

                <p className="text-primary font-medium mb-6">{member.title}</p>

                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-primary hover:bg-primary/90 p-3 rounded-full flex items-center justify-center transition-colors"
                >
                  Connect on <Linkedin className="w-5 h-5 ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Ensure footer is above background */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
