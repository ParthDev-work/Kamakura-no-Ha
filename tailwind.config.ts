import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kinari: "var(--kinari)",
        sumi: "var(--sumi)",
        keshizumi: "var(--keshizumi)",
        nibi: "var(--nibi)",
        ai: "var(--ai)",
        shu: "var(--shu)",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "serif"],
        gothic: ["var(--font-gothic)", "sans-serif"],
        latin: ["var(--font-latin)", "serif"],
      },
      borderRadius: {
        DEFAULT: "2px",
        none: "0",
        sm: "1px",
      },
      letterSpacing: {
        ja: "0.04em",
      },
    },
  },
  plugins: [],
};

export default config;
