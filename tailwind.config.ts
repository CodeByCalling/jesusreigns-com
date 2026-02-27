import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: "#1e1e1e",
          2: "#252525",
          3: "#2e2e2e",
        },
        amber: {
          DEFAULT: "#D4A020",
          light: "#F0C84A",
          pale: "#fdf6e3",
        },
        offwhite: "#F7F5F0",
        gray: "#888888",
        light: "#DDDDDD",
        text: "#1a1a1a",
      },
      fontFamily: {
        serif: ["'Playfair Display'", "serif"],
        sans: ["'DM Sans'", "sans-serif"],
      },
      height: {
        nav: "72px",
      },
      padding: {
        nav: "72px",
      },
      spacing: {
        nav: "72px",
      },
      fontSize: {
        "hero-xl": [
          "clamp(44px, 6.5vw, 84px)",
          { lineHeight: "1.03", letterSpacing: "-1px", fontWeight: "900" },
        ],
        "section-title": [
          "clamp(28px, 4vw, 46px)",
          { lineHeight: "1.1", letterSpacing: "-0.3px", fontWeight: "700" },
        ],
        "page-hero-title": [
          "clamp(32px, 5vw, 58px)",
          { lineHeight: "1.05", letterSpacing: "-0.5px", fontWeight: "900" },
        ],
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(0.7)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease",
        pulseDot: "pulseDot 1.5s infinite",
      },
    },
  },
  plugins: [],
};
export default config;
