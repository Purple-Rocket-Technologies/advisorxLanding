import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = window.innerHeight * 0.9; // 75vh
      if (!window.location.pathname.includes("pricing")) {
        setScrolled(scrollPosition > threshold);
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
    <nav className="fixed top-0 left-0 right-0 backdrop-blur-lg bg-white/5 backdrop:blur-md dark:bg-base-black/60 flex items-center justify-between p-6 w-full z-[1000]">
      <div className="flex justify-between items-center w-full max-w-[80%] mx-auto px-4 md:px-6">
        <div
          className={`text-2xl font-bold h-fit ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          <Image
            src={"/logos/logo.svg"}
            alt="AdvisorX Logo"
            className={scrolled ? "invert" : "text-white"}
            width={120}
            height={10}
          />
        </div>
        <div
          className={`hidden md:flex space-x-8 ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          <a
            href="#features"
            className={`${
              scrolled ? "text-neutral-800" : "text-neutral-medium"
            } hover:text-primary transition-colors duration-200`}
          >
            Features
          </a>
          <a
            href="#founders"
            className={`${
              scrolled ? "text-neutral-800" : "text-neutral-medium"
            } hover:text-primary transition-colors duration-200`}
          >
            Founders
          </a>
          <a
            href="#security"
            className={`${
              scrolled ? "text-neutral-800" : "text-neutral-medium"
            } hover:text-primary transition-colors duration-200`}
          >
            Security
          </a>
          <Link
            href="/pricing"
            className={`${
              scrolled ? "text-neutral-800" : "text-neutral-medium"
            } hover:text-primary transition-colors duration-200`}
          >
            Pricing
          </Link>
          <Link
            href="/blog"
            className={`${
              scrolled ? "text-neutral-800" : "text-neutral-medium"
            } hover:text-primary transition-colors duration-200`}
          >
            Blog
          </Link>
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
