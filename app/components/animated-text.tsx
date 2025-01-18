"use client";

import React from "react";

interface Props {
  text: string;
  delay: number;
  className?: string;
}

export const AnimatedText = ({ text, delay, className = "" }: Props) => {
  const letters = Array.from(text);

  return (
    <span className={`inline-block ${className}`}>
      {letters.map((letter, index) => (
        <span
          key={index}
          className="inline-block opacity-0 animate-[fade-up_0.5s_ease-out_forwards] text-white"
          style={{
            animationDelay: `${delay + index * 0.05}s`,
            animationFillMode: "forwards",
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </span>
  );
};
