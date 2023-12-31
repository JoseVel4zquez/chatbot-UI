/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./src/pages/RegisterAnswer.jsx"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        nunito: ["Nunito Sans", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        "side-bar-bg": "#202123",
        "light-gray": "rgba(255, 255, 255, 0.5)",
        "app-gray": "#343541",
        "feed-gray": "#444654",
        "feed-white": "rgba(255, 255, 255, 0.8)",
        "green-buttons": "#70b578",
        "institucional-purple": "#842076",
        "purple-forms": "#8f65ff",
        "yellow-forms": "#fecb2e",
        "standar-yellow": "#fed700",
        "forms-dark": "#272733",
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
