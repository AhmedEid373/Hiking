import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#e6e8ed",
          100: "#c0c5d1",
          200: "#97a0b5",
          300: "#6d7b99",
          400: "#4d5f84",
          500: "#2d4370",
          600: "#273b65",
          700: "#1f3157",
          800: "#17274a",
          900: "#0e1a34",
          950: "#080d1a",
        },
        accent: {
          blue: "#4f46e5",
          purple: "#7e22ce",
        },
      },
      fontFamily: {
        heading: ["Syne", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
      },
      backgroundImage: {
        "gradient-accent": "linear-gradient(135deg, #4f46e5, #7e22ce)",
        "gradient-accent-hover": "linear-gradient(135deg, #4338ca, #6b21a8)",
      },
    },
  },
  plugins: [],
};

export default config;
