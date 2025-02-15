"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const navigationItems = [
  { label: "Features", href: "#features", isHash: true },
  { label: "Founders", href: "#founders", isHash: true },
  { label: "Security", href: "#security", isHash: true },
  { label: "Pricing", href: "/pricing", isHash: false },
  { label: "Blog", href: "/blog", isHash: false },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = window.innerHeight * 0.9; // 75vh
      if (!window.location.pathname.includes("pricing")) {
        setScrolled(scrollPosition > threshold);
        console.log(scrollPosition, threshold);
      } else {
        setScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    if (window.location.pathname.includes("pricing")) {
      setScrolled(true);
    }
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 backdrop-blur-lg backdrop:blur-md dark:bg-base-black/60 flex items-center justify-between p-6 w-full z-[1000] ${
        scrolled ? "bg-white/80" : ""
      }`}
    >
      <div className="flex justify-between items-center w-full max-w-[80%] mx-auto px-4 md:px-6">
        <div className="text-2xl font-bold h-fit">
          <Image
            src={"/logos/logo.svg"}
            alt="AdvisorX Logo"
            className={scrolled ? "invert" : ""}
            width={120}
            height={10}
          />
        </div>
        <div className="hidden md:flex space-x-8">
          {navigationItems.map((item) =>
            item.isHash ? (
              <a
                key={item.label}
                href={item.href}
                className={`${
                  scrolled ? "text-gray-800" : "text-white"
                } hover:text-secondary transition-colors duration-200`}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={`${
                  scrolled ? "text-gray-800" : "text-white"
                } hover:text-secondary transition-colors duration-200`}
              >
                {item.label}
              </Link>
            )
          )}
        </div>
        <div className="flex items-center gap-4">
          <Button className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 hover:shadow-primary/40">
            Schedule Demo
          </Button>
        </div>
      </div>
    </nav>
  );
}
