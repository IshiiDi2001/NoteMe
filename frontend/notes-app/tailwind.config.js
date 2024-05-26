/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      //colors used in the project
      colors: {
        primary: "#2B85FF",
        secondary: "#EF863E",
      },
    },
  },
  plugins: [],
};
