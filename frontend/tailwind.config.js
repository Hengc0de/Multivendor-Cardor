/** @type {import('tailwindcss').Config} */
const default_theme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      Gilroy: ["Gilroy", "sans-serif"],
    },
    extend: {
      screens: {
        "1000px": "1050px",
        "1100px": "1110px",
        "800px": "800px",
        "1300px": "1300px",
        "400px": "400px",
      },
      fontFamily: {
        sans: ["Poppins", ...default_theme.fontFamily.sans],
        Poppins: ["Poppins", "sans-serif"],
        Gilroy: ["Gilroy", "sans-serif"],
      },
    },
  },
  plugins: [],
};
