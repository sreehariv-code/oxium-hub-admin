/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#03CD70",
        bgColor: "#181818",
        sideBg: "#1C1E1F",
        sideBgSelect: "#292C2D",
        primaryText: "#F1F1F1",
        sideBarText: "#A5AFBA",
        bgSuccess: "#CDFEE1",
        textSuccess: "#0C5132",
        bgWarning: "#FFD6A4",
        textWarning: "#5E4200",
        bgFillSuccess: "#29845A",
      },
    },
  },
  plugins: [],
};
