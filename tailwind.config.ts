import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        spin: "spin 1s linear infinite",
      },
      colors: {
        primary: {
          DEFAULT: "#2F2E41",
          light: "#999999",
          pale: "#FFB6B6",
          neutral: "#E6E6E6",
        },
        button: {
          background: {
            blue: "#009EDD",
            white: "#FFFFFF",
          },
        },
        green: "#039B00",
        textPrimary: "#2F2E41",
        textSecondary: "#333333",
        white: "#FFFFFF",
        border: "#3F3D56",
      },
      fontFamily: {
        sans: ['"Open Sans"', "sans-serif"],
      },
      fontSize: {
        xs: ["12px", "normal"],
        sm: ["14px", "normal"],
        base: ["16px", "normal"],
      },
      fontWeight: {
        semibold: "600",
        bold: "700",
      },
      textAlign: {
        center: "center",
      },
    },
  },
  plugins: [],
};
export default config;
