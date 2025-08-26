import plugin from "tailwindcss/plugin";
import heroui from "./hero";

/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/app/**/*.{ts,tsx,js,jsx}"],
  darkMode: "system",
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("dark", "&:is(.dark *)");
    }),
    heroui,
  ],
  source: ["./node_modules/@heroui/theme/dist/**.*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        foreground: "#171717",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
    },
  },
};

export default config;
