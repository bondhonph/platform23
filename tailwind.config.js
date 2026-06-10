/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#D4A017",
        "gold-light": "#F0C040",
        cream: "#F5F0E8",
        dark: "#0A0A0A",
        card: "#141414",
        border: "#2A2A2A",
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
