import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#090E1A",
          surface: "#101827",
          text: "#E5E7EB",
          accent: "#22D3EE",
          muted: "#94A3B8",
        },
      },
    },
  },
  plugins: [],
};

export default config;
