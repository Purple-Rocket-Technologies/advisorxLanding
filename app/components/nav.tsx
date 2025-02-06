import { Button } from "@/components/ui/button";
// import { ThemeToggle } from "./theme-toggle";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 backdrop-blur-lg bg-white dark:bg-base-black/60 border-b border-neutral-light/10 flex items-center justify-between p-6 w-full z-[1000]">
      <div className="flex justify-between items-center w-full max-w-[80%] mx-auto px-4 md:px-6">
        <div className="text-2xl font-bold text-black h-fit">
          <Image
            src={"/logos/logo.svg"}
            alt="AdvisorX Logo"
            width={120}
            height={10}
          />
        </div>
        <div className="hidden md:flex space-x-8 text-black">
          <a
            href="#features"
            className="text-neutral-medium hover:text-primary transition-colors duration-200"
          >
            Features
          </a>
          <a
            href="#founders"
            className="text-neutral-medium hover:text-primary transition-colors duration-200"
          >
            Founders
          </a>
          <a
            href="#security"
            className="text-neutral-medium hover:text-primary transition-colors duration-200"
          >
            Security
          </a>
          <Link
            href="/pricing"
            className="text-neutral-medium hover:text-primary transition-colors duration-200"
          >
            Pricing
          </Link>
          <Link
            href="/blog"
            className="text-neutral-medium hover:text-primary transition-colors duration-200"
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
