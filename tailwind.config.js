/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-color": " #04395E",
        "background-accent": "#0F5092",
        "main-text": "#C1E4FF",
        "accent-text": "#69FF9E",
      },
      fontFamily: {
        "main-font": "Montserrat, sans-serif",
        "accent-font": "IBM Plex Mono",
      },
      screens: {
        "3xl": "2000px",
      },
    },
  },
  plugins: [],
};
