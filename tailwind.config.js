/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter"],
      logo: ["Montserrat"],
    },
    colors: {
      "gray-light": "#5C5C5C",
      "gray-lighter": "#C0BFBF",
      "gray-dark": "#242424",
      "gray-medium": "#545454",
      "light-green": "#73F423",
      gray: "#363835",
      black: "#000000",
    },
    extend: {},
  },
  plugins: [],
};
