import { motion } from "framer-motion";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative min-w-screen w-full bg-gradient-to-br  from-teal-900 via-primary to-teal-600 dark:bg-background/50 pt-20 pb-12 overflow-hidden border-t-2 border-gray-700/5 rounded-md">
      <div className="absolute inset-0">
        <div className="absolute inset-0  bg-[length:20px_20px]" />
        <motion.div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[120px] -translate-y-1/2"
          animate={{
            opacity: [0.5, 0.3, 0.5],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-4">
            <Image
              src="/logos/logo.svg"
              width={150}
              height={100}
              alt="AdvisorX"
            />
            <p className="text-white text-sm max-w-xs">
              AI Marketing Manager for Wealth Advisors
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/advisorx-ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-secondary transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://youtube.com/@advisorxai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-secondary transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="/company"
                  className="text-white hover:text-secondary transition-colors"
                >
                  Founders
                </a>
              </li>
              <li>
                <a
                  href="/security"
                  className="text-white hover:text-secondary transition-colors"
                >
                  Security
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-white hover:text-secondary transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-white hover:text-secondary transition-colors"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="/privacy-policy"
                  className="text-white hover:text-secondary transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-white hover:text-secondary transition-colors"
                >
                  Terms and Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white">
              © 2025 AdvisorX. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <select className="bg-transparent text-sm text-white border-none focus:outline-none focus:ring-0">
                <option value="en">English (US)</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
