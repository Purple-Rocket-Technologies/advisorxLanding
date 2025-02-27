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
    <div className="mt-32 w-full overflow-x-hidden">
      <NavBar />
      {/* Hero Section */}
      <div className="mb-16 flex flex-col items-center text-center px-4 md:px-8">
        <h1 className="text-4xl font-bold mb-6 text-gray-800 bg-gradient-to-b from-secondary via-cyan-800 to-primary bg-clip-text text-transparent">
          Our Story
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
          AdvisorX was founded in May of 2024 by multiple serial entrepreneurs
          with specialized experience in marketing technology, investment
          management and artificial intelligence. 2 of our 3 founders are
          Y-Combinator alumni featured on the YC top 100 AI startup companies
          list.
        </p>
        <p className="text-lg text-gray-600 max-w-3xl mt-4 leading-relaxed">
          Our mission is to enable financial advisors leverage AI to educate
          more American households with engaging educational content. We live in
          an age of content proliferation and brand differentiation is one of
          the core unique selling points that firms will have to adopt to stand
          out and attract their ideal clients.
        </p>
        <p className="text-lg text-gray-600 max-w-3xl mt-4 leading-relaxed">
          We believe AI presents a new opportunity for wealth management firms
          to achieve this consistently and compliantly.
        </p>
      </div>

      {/* Team Section */}
      <div className="text-center mb-12 max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 bg-gradient-to-b from-secondary via-cyan-800 to-primary bg-clip-text text-transparent">
          Leadership Team
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 place-items-center">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group flex flex-col items-center bg-white p-6 rounded-lg shadow-lg border w-full transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                whileTap={{ scale: 0.95 }}
                className="w-24 h-24 bg-primary rounded-full mb-4 flex items-center justify-center overflow-hidden"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={150}
                  height={150}
                  className="w-full h-full aspect-square object-cover rounded-full relative top-2"
                />
              </motion.div>
              <h3 className="text-xl font-semibold mb-1 text-gray-800">
                {member.name}
              </h3>
              <p className="text-gray-500 text-sm">{member.title}</p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary mt-2"
              >
                <Linkedin className="w-6 h-6 text-primary" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
