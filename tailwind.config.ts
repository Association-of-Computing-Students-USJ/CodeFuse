import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#12081C",
        foreground: "#ffffff",
        "neon-pink": "#E024CE",
        "neon-blue": "#00F0FF",
      },
      fontFamily: {
        heading: ["var(--font-bebas-neue)", "Impact", "sans-serif"],
        mono: ["var(--font-fira-code)", "monospace"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      dropShadow: {
        "neon-pink": "0 0 15px rgba(224, 36, 206, 0.8)",
        "neon-blue": "0 0 15px rgba(0, 240, 255, 0.8)",
        "neon-pink-lg": "0 0 30px rgba(224, 36, 206, 0.9)",
        "neon-blue-lg": "0 0 30px rgba(0, 240, 255, 0.9)",
      },
      boxShadow: {
        "neon-pink": "0 0 15px rgba(224, 36, 206, 0.8)",
        "neon-blue": "0 0 15px rgba(0, 240, 255, 0.8)",
        "neon-pink-lg":
          "0 0 30px rgba(224, 36, 206, 0.9), 0 0 60px rgba(224, 36, 206, 0.4)",
        "neon-blue-lg":
          "0 0 30px rgba(0, 240, 255, 0.9), 0 0 60px rgba(0, 240, 255, 0.4)",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".text-glow-pink": {
          "text-shadow":
            "0 0 10px rgba(224, 36, 206, 0.8), 0 0 20px rgba(224, 36, 206, 0.6), 0 0 40px rgba(224, 36, 206, 0.4)",
        },
        ".text-glow-blue": {
          "text-shadow":
            "0 0 10px rgba(0, 240, 255, 0.8), 0 0 20px rgba(0, 240, 255, 0.6), 0 0 40px rgba(0, 240, 255, 0.4)",
        },
        ".text-glow-pink-lg": {
          "text-shadow":
            "0 0 20px rgba(224, 36, 206, 1), 0 0 40px rgba(224, 36, 206, 0.8), 0 0 80px rgba(224, 36, 206, 0.5)",
        },
        ".text-glow-blue-lg": {
          "text-shadow":
            "0 0 20px rgba(0, 240, 255, 1), 0 0 40px rgba(0, 240, 255, 0.8), 0 0 80px rgba(0, 240, 255, 0.5)",
        },
        ".border-glow-pink": {
          "box-shadow":
            "0 0 15px rgba(224, 36, 206, 0.8), inset 0 0 15px rgba(224, 36, 206, 0.1)",
        },
        ".border-glow-blue": {
          "box-shadow":
            "0 0 15px rgba(0, 240, 255, 0.8), inset 0 0 15px rgba(0, 240, 255, 0.1)",
        },
      });
    }),
  ],
};
export default config;
