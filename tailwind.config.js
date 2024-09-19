/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ['"Josefin Sans"', "sans-serif"],
        roman: ['"Regular Roman"', "sans-serif"],
      },
      colors: {
        primary: "#20B716",
        red: "#D9185F",
      },
    },
  },
  plugins: [],
};
