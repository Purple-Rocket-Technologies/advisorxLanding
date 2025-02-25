"use client";
import Pricing from "./pricing";
import NavBar from "../components/nav";
import Footer from "../components/footer";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center">
      {/* Navigation */}
      <NavBar />
      {/* Pricing Section */}
      <div className="flex-grow flex flex-col items-center justify-center w-full mt-10">
        <Pricing />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
