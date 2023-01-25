/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-manrope)"],
      },
      colors: {
        lightcy: "hsl(193, 38%, 86%)",
        neongr: "hsl(150, 100%, 66%)",
        grayblue: "hsl(217, 19%, 38%)",
        darkgrayb: "hsl(217, 19%, 24%)",
        darkb: "hsl(218, 23%, 16%)",
      },
    },
  },
  plugins: [],
};
