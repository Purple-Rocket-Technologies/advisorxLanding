"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const navigationItems = [
  { label: "Features", href: "/#features", isHash: true },
  // { label: "Founders", href: "/company", isHash: true },
  // { label: "Security", href: "/#security", isHash: true }, // Removed security tab
  { label: "Pricing", href: "/pricing", isHash: false },
  { label: "Blog", href: "/blog", isHash: false },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = window.innerHeight * 0.9; // 75vh
      if (window.location.pathname.includes("company")) {
        setScrolled(true);
        return;
      }
      if (!window.location.pathname.includes("pricing")) {
        setScrolled(scrollPosition > threshold);
        //console.log(scrollPosition, threshold);
      } else {
        setScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    if (window.location.pathname.includes("pricing")) {
      setScrolled(true);
    }
    if (window.location.pathname.includes("company")) {
      setScrolled(true);
      return;
    }
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 backdrop-blur-lg backdrop:blur-md dark:bg-base-black/60 flex items-center justify-between p-6 w-full z-[1000] ${
        scrolled ? "bg-white/80" : ""
      }`}
    >
      <div className="flex justify-between items-center w-full max-w-screen md:max-w-[80%] mx-auto px-4 md:px-6">
        <Link href="/">
          <div className="flex items-center gap-3 h-fit">
            {/* AdvisorX AI logo */}
            <img
              src={scrolled ? "/api/logo-dark" : "/api/logo"}
              alt="AdvisorX AI Logo"
              className="w-10 h-10"
            />
            <span 
              className={`text-xl md:text-2xl font-semibold tracking-tight ${
                scrolled ? "text-gray-800" : "text-white"
              }`}
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              AdvisorX AI
            </span>
          </div>
        </Link>
        {/* Desktop Navigation */}
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
          <Button className="hidden md:block bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 hover:shadow-primary/40">
            Schedule Demo
          </Button>

          {/* Login and signup buttons */}
          <div className="flex items-center gap-4">
            <Button 
                variant="outline"
                className="border-primary text-primary hover:bg-gray-100"
                onClick={() => window.location.href="https://dashboard.advisorx.ai"}
            >
                Login
            </Button>
            <Button 
                className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 hover:shadow-primary/40"
            >
                Contact Sales
            </Button>
          </div>



          {/* Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
          >
            <div
              className={`hamburger ${mobileMenuOpen ? "open" : ""} flex flex-col gap-1.5`}
            >
              <span
                className={`h-0.5 w-6 bg-current block ${
                  scrolled ? "bg-gray-800" : "bg-white"
                }`}
              ></span>
              <span
                className={`h-0.5 w-6 bg-current block ${
                  scrolled ? "bg-gray-800" : "bg-white"
                }`}
              ></span>
              <span
                className={`h-0.5 w-6 bg-current block ${
                  scrolled ? "bg-gray-800" : "bg-white"
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 top-[88px] bg-white z-50 md:hidden backdrop-blur-md animate-scale-in">
            <div className="w-full absolute top-0 left-0 h-screen bg-black/30 -z-10"></div>
            <div className="flex flex-col items-center pt-8 space-y-8 bg-white w-full px-12 py-5 ">
              {navigationItems.map((item) =>
                item.isHash ? (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-gray-800 text-lg hover:text-secondary transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-gray-800 text-lg hover:text-secondary transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                )
              )}
              <Button className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 hover:shadow-primary/40">
                Schedule Demo
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
