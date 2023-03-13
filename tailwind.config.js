/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Primary: { Blue: "#4F7DF3" },
        Neutral: { gray: "#969696", darkblue: "#151F29", graywhite: "#A4A4A4" },
        Secondary: { LightRed: "#FF5263", PaleBlue: "#C2D3FF" },
      },
      fontFamily: {
        sans: ["Libre Franklin", "sans-serif"],
      },
    },
  },
  plugins: [],
};
