import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      minHeight: {
        device: "100dvh",
      },
      maxWidth: {
        "10xl": "1440px",
      },
      scale: {
        "200": "2.00",
      },
      backgroundImage: {
        sun: "url('/assets/sun.png')",
        cloud: "url('/assets/cloud.png')",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
export default config;
