/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope"],
      },
      colors: {
        lightcy: "var(--light-cyan)",
        neongr: "var(--neon-green)",
        grayblue: "var(--Grayish-Blue)",
        darkgrayb: "var(--Dark-Grayish-Blue)",
        darkb: "var(--Dark-Blue)",
      },
    },
  },
  plugins: [],
};
