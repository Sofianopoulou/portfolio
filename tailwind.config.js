const { transcode } = require("buffer");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      background: "#1a181d",
      "transparent-background": "rgba(26, 24, 29, 0.7)",
      white: "#ffffff",
      pink: "#ff00c1",
      purple: "#9b00ff",
      blue: "#4900ff",
      "light-blue": "#00b8ff",
      tirquoise: "#00fff9",
    },
    extend: {
      fontFamily: { pridi: ["Pridi", "sans-serif"] },
      fontWeight: {
        extralight: "200",
        light: "300",
        normal: "400", // Default
        medium: "500",
        semibold: "600",
        bold: "700",
      },
    },
  },
  plugins: [],
};
