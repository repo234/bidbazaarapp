/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      orange: "#ef7e06",
      yellow: "#fff72b",
      white: "#ffffff",
      grey: " #fff0e6",
      black: "#262626",
    },
    screens: {
      sm: " 640px	",
      md: "768px",
      lg: "1024px",
      xl: "1280px	",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
