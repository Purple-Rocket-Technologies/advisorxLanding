"use client";
import NavBar from "../components/nav";
import Footer from "../components/footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, ArrowRight, Award, Users, Target } from "lucide-react";

const teamMembers = [
  {
    name: "Jonathan Michael",
    title: "CEO",
    image: "/images/jonathan.png",
    linkedin: "https://www.linkedin.com/in/jmjonathanmichael/",
    bio: "Serial entrepreneur with deep expertise in marketing technology and investment management.",
  },
  {
    name: "Zach McCormick",
    title: "Head of AI",
    image: "/images/zach.png",
    linkedin: "https://www.linkedin.com/in/zach-mccormick-295a5953/",
    bio: "Y-Combinator alumni with specialized experience in artificial intelligence and machine learning.",
  },
  {
    name: "Nick McCormick",
    title: "CTO",
    image: "/images/nick.png",
    linkedin: "https://www.linkedin.com/in/nick-mccormick-6813828b/",
    bio: "Technology leader with expertise in building scalable platforms for financial services.",
  },
];

const companyValues = [
  {
    title: "Innovation",
    description: "Pushing the boundaries of AI to transform financial advising",
    icon: <Award className="w-8 h-8 text-primary" />,
  },
  {
    title: "Education",
    description: "Empowering advisors to better educate American households",
    icon: <Users className="w-8 h-8 text-primary" />,
  },
  {
    title: "Excellence",
    description: "Delivering exceptional tools that drive meaningful outcomes",
    icon: <Target className="w-8 h-8 text-primary" />,
  },
];

export default function CompanyPage() {
  return (
    <div className="w-full overflow-x-hidden bg-white relative">
      <NavBar />
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#006e59_100%)]"></div>

      {/* Hero Section */}
      <div className="relative min-h-[80vh] flex items-center justify-center z-10 px-4 md:px-6 mt-32 md:mt-0">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl md:text-7xl font-black mb-8 tracking-tight"
            >
              <span className="bg-gradient-to-r from-black via-teal-900 to-black bg-clip-text text-transparent">
                Transforming Financial Advising
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-gray-700 mb-8 leading-relaxed"
            >
              AdvisorX was founded in May of 2024 by multiple serial
              entrepreneurs with specialized experience in marketing technology,
              investment management and artificial intelligence.
            </motion.p>

            <motion.a
              href="#mission"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="inline-flex items-center text-primary font-semibold text-lg group"
            >
              Learn more about our mission
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="https://images.pexels.com/photos/7979605/pexels-photo-7979605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="AdvisorX Team"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>

      {/* Mission Section */}
      <section id="mission" className="relative z-10 py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16 max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-black via-teal-900 to-black bg-clip-text text-transparent font-black">
                Our Mission
              </span>
            </h2>

            <p className="text-xl text-gray-700 leading-relaxed">
              <span className="font-semibold">
                Our mission is to enable financial advisors leverage AI to
                educate more American households with engaging educational
                content.
              </span>{" "}
              We live in an age of content proliferation and brand
              differentiation is one of the core unique selling points that
              firms will have to adopt to stand out and attract their ideal
              clients.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {companyValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="mb-5 p-3 bg-primary/10 inline-block rounded-lg">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gray-50 relative z-10 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16 max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-black via-teal-900 to-black bg-clip-text text-transparent font-black">
                Founding Team
              </span>
            </h2>
            <p className="text-xl text-gray-700">
              Our founders include Y-Combinator alumni featured on the YC top
              100 AI startup companies list.
            </p>
          </motion.div>

          <div className="grid gap-12 md:grid-cols-3 place-items-center">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group bg-white rounded-2xl shadow-xl border border-gray-100 w-full overflow-hidden"
              >
                <div className="h-64 w-full relative overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-contain rounded-full my-5 "
                  />
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-1 text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-4">
                    {member.title}
                  </p>
                  <p className="text-gray-600 mb-6">{member.bio}</p>

                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded-lg transition-colors"
                  >
                    Connect on <Linkedin className="w-5 h-5 ml-2" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 relative z-10 px-4 md:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-primary/5 p-10 rounded-3xl border border-primary/20"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
              We believe AI presents a new opportunity for wealth management
              firms to achieve brand differentiation consistently and
              compliantly.
            </h2>
            <a
              href="/contact"
              className="inline-flex items-center bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              Partner with us
              <ArrowRight className="ml-2" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
