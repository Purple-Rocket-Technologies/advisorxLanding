"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "AdvisorX has transformed how we handle our marketing. The AI-powered content generation saves us countless hours while maintaining compliance.",
    author: "Sarah Johnson",
    title: "Managing Partner",
    firm: "Johnson Wealth Advisors",
    image: "https://picsum.photos/200/300",
  },
  {
    quote:
      "The compliance features alone are worth the investment. We've seen a 40% increase in our social media engagement since using AdvisorX.",
    author: "Michael Chen",
    title: "Chief Marketing Officer",
    firm: "Pacific Wealth Management",
    image: "https://picsum.photos/200/300",
  },
  {
    quote:
      "As a solo advisor, AdvisorX has been like having an entire marketing team at my fingertips. It's incredibly intuitive and effective.",
    author: "Emily Rodriguez",
    title: "Founder",
    firm: "Clear Path Financial",
    image: "https://picsum.photos/200/300",
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
    }, 15000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 relative overflow-hidden min-w-full">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 flex flex-col items-center justify-center gap-6"
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
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-foreground to-foreground/60 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-3xl">
            Join thousands of financial advisors who are growing their practice
            with AdvisorX
          </p>
        </motion.div>

        <div className="relative h-[500px] flex items-center justify-center">
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
              className="absolute w-full max-w-4xl mx-auto"
            >
              <div className="relative">
                <div className="bg-card/30 backdrop-blur-xl border border-border/50 rounded-2xl p-12 md:p-14 hover:border-primary/20 transition-colors duration-300 group">
                  <div className="flex flex-col items-center text-center">
                    <Quote className="w-12 h-12 text-primary mb-8 rotate-180 opacity-50 group-hover:opacity-80 transition-opacity duration-300" />
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="text-2xl md:text-3xl font-medium text-foreground mb-10 leading-relaxed"
                    >
                      {testimonials[current].quote}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="flex items-center gap-6"
                    >
                      <div className="w-16 h-16 rounded-full overflow-hidden bg-muted ring-4 ring-border/50 group-hover:ring-primary/20 transition-all duration-300">
                        <img
                          src={testimonials[current].image}
                          alt={testimonials[current].author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-left">
                        <div className="font-semibold text-lg text-foreground">
                          {testimonials[current].author}
                        </div>
                        <div className="text-muted-foreground">
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
            className="absolute -left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/80 backdrop-blur border border-border flex items-center justify-center text-foreground hover:bg-accent hover:border-primary/20 transition-colors z-10"
            onClick={() => paginate(-1)}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            className="absolute -right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/80 backdrop-blur border border-border flex items-center justify-center text-foreground hover:bg-accent hover:border-primary/20 transition-colors z-10"
            onClick={() => paginate(1)}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > current ? 1 : -1);
                  setCurrent(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
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
