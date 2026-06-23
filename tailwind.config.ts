import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0B0B0E",
        surface: "#121214",
        "surface-2": "#1A1A1E",
        accent: "#14B8A6",
        "accent-light": "#5EEAD4",
        "accent-dark": "#0F766E",
        text: "#FFFFFF",
        "text-secondary": "#A1A1AA",
        "text-muted": "#9CA3AF",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      spacing: {
        "section": "7rem",
      },
      borderRadius: {
        "xl": "1rem",
        "2xl": "1.25rem",
      },
    },
  },
  plugins: [],
};
export default config;
