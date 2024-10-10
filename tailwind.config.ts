import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        lg2: "1026px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1836px",
        "4xl": "1920px",
      },
    },
  },

  plugins: [],
};

export default config;
