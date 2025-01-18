import type { Config } from "tailwindcss";
import svgToTinyDataUri from "mini-svg-data-uri";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "trusted-in": "trusted-in 0.2s ease-out forwards",
        "mask-wave-1": "mask-wave-1 8s ease-in-out infinite",
        "mask-wave-2": "mask-wave-2 12s ease-in-out infinite",
        "mask-wave-3": "mask-wave-3 10s ease-in-out infinite",
        "gradient-x": "gradient-x 3s ease infinite",
        "fade-up": "fade-up 0.5s ease-out forwards",
      },
      keyframes: {
        "trusted-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(8px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "mask-wave-1": {
          "0%, 100%": {
            transform: "translateX(10%) translateY(5%)",
          },
          "50%": {
            transform: "translateX(-10%) translateY(-5%)",
          },
        },
        "mask-wave-2": {
          "0%, 100%": {
            transform: "translateX(-15%) translateY(-3%)",
          },
          "50%": {
            transform: "translateX(15%) translateY(3%)",
          },
        },
        "mask-wave-3": {
          "0%, 100%": {
            transform: "translateX(8%) translateY(-8%)",
          },
          "50%": {
            transform: "translateX(-8%) translateY(8%)",
          },
        },
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      rotate: {
        "x-2": "rotateX(2deg)",
      },
      perspective: {
        "2000": "2000px",
      },
      transformStyle: {
        "3d": "preserve-3d",
      },
      transitionDelay: {
        "450": "450ms",
        "600": "600ms",
        "750": "750ms",
        "400": "400ms",
      },
      transitionDuration: {
        "800": "800ms",
      },
    },
  },
  plugins: [
    function ({
      matchUtilities,
      theme,
    }: {
      matchUtilities: any;
      theme: (path: string) => any;
    }) {
      matchUtilities(
        {
          "bg-grid": () => ({
            backgroundImage: `url("${svgToTinyDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="256" height="256" fill="none" stroke="gray" stroke-width="0.01"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToTinyDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}" stroke-width="0.5"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToTinyDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
    require("tailwindcss-animate"),
    function ({
      addUtilities,
    }: {
      addUtilities: (utilities: Record<string, Record<string, string>>) => void;
    }) {
      addUtilities({
        ".perspective-[2000px]": {
          perspective: "2000px",
        },
        ".preserve-3d": {
          transformStyle: "preserve-3d",
        },
      });
    },
  ],
};

export default config;
