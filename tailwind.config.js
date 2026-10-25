const { transcode } = require("buffer");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      background: "var(--color-background)",
      "transparent-background": "var(--color-header-background)",
      "menu-background": "var(--color-menu-background)",
      "menu-border": "var(--color-menu-border)",
      "menu-hover": "var(--color-menu-hover)",
      white: "var(--color-text)",
      pink: "var(--color-pink)",
      purple: "var(--color-purple)",
      blue: "var(--color-blue)",
      "light-blue": "var(--color-light-blue)",
      tirquoise: "var(--color-turquoise)",
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
