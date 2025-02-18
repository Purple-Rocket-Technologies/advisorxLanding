"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  // {
  //   quote:
  //     "AdvisorX is a big time saver for me and my team. It helps us overcome writer's block and ensures that the content we create is aligned with our firm's messaging. The ability to pull talking points from specific domains and combine them with our brand strategy is something I haven't seen in other tools.",
  //   author: "Erik Allison",
  //   title: "VP & Wealth Advisor",
  //   firm: "Farther",
  //   image: "/people/Eric.png",
  // },
  {
    quote:
      "AdvisorX saves me time by making content creation and client communication easier. It even helps me answer complex questions, like those involving international taxes, with incredible accuracy.",
    author: "Buff Dormeier",
    title: "Chief Technical Analyst",
    firm: "Kingsview Partners",
    image: "/people/Buff Dormeier.jpeg",
  },
  {
    quote:
      "AdvisorX saves me time and mental energy by simplifying content creation and client communication. This allows me to focus on what truly matters: providing the best possible financial planning and advice to my clients.",
    author: "Michael Reynolds",
    title: "Founder",
    firm: "Elevation Financial",
    image: "/people/MichaelReynolds.jpeg",
  },
  {
    quote:
      "AdvisorX has been instrumental in establishing my firm's unique voice and online presence. It allows me to efficiently create original content tailored to my specific audience, including detailed explanations of complex topics like stock options and retirement plans.",
    author: "Jacob Rieger",
    title: "CIO",
    firm: "Vaultis Private Wealth",
    image: "/people/Jacob Rieger.jpeg",
  },
] as const;

export const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrent(
      (prev) =>
        (prev + newDirection + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 md:py-32 relative overflow-hidden min-w-full px-4">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/50" />
        <motion.div
          className="absolute top-20 -right-32 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]"
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]"
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-20 flex flex-col items-center justify-center gap-4 md:gap-6"
        >
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
            className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
          >
            Testimonials
          </motion.span>
          <h3 className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-secondary via-cyan-700 to-primary bg-clip-text text-transparent pb-2">
            What advisors are saying
          </h3>
        </motion.div>

        <div className="relative h-[600px] md:h-[500px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                scale: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full max-w-4xl mx-auto px-4"
            >
              <div className="relative">
                <div className="bg-cardBg backdrop-blur-xl border border-border/50 rounded-2xl p-6 md:p-14 hover:border-primary/20 transition-colors duration-300 group">
                  <div className="flex flex-col items-center text-center">
                    <Quote className="w-8 h-8 md:w-12 md:h-12 text-primary mb-6 md:mb-8 rotate-180 opacity-50 group-hover:opacity-80 transition-opacity duration-300" />
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="text-xl md:text-2xl lg:text-3xl font-medium text-foreground mb-8 md:mb-10 leading-relaxed"
                    >
                      {testimonials[current].quote}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="flex flex-col md:flex-row items-center md:gap-6 gap-4"
                    >
                      <Image
                        src={testimonials[current].image}
                        alt={`${testimonials[current].author}'s avatar`}
                        width={35}
                        height={35}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="text-center md:text-left">
                        <div className="font-semibold text-base md:text-lg text-foreground">
                          {testimonials[current].author}
                        </div>
                        <div className="text-sm md:text-base text-muted-foreground">
                          {testimonials[current].title},{" "}
                          <span className="text-primary">
                            {testimonials[current].firm}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            className="absolute -left-2 md:-left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/80 backdrop-blur border border-border flex items-center justify-center text-foreground hover:bg-accent hover:border-primary/20 transition-colors z-10"
            onClick={() => paginate(-1)}
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <button
            className="absolute -right-2 md:-right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/80 backdrop-blur border border-border flex items-center justify-center text-foreground hover:bg-accent hover:border-primary/20 transition-colors z-10"
            onClick={() => paginate(1)}
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > current ? 1 : -1);
                  setCurrent(index);
                }}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  index === current
                    ? "bg-primary scale-100"
                    : "bg-primary/20 scale-75 hover:scale-90 hover:bg-primary/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
