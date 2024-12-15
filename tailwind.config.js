/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        arial: ["Arial", "sans-serif"],
        hind: ["Hind Siliguri", "sans-serif"],
        roboto: ["Roboto Mono", "monospace"],
        khmer: ["Noto Serif Khmer", "serif"],
      },
      colors: {
        primary: "#1B3351",
        secondary: "#122133",
        yPrimary: "#CEA93A",
        lightGray: "#E9ECEF",
        darkGray: "#343A40",
      },
      dropShadow: {
        "custom-dark-1": "0px 4px 4px rgba(0, 0, 0, 1)",
        "custom-dark-2": "0px 3px 3px rgba(0, 0, 0, 1)",
        "custom-dark-3": "0px 2px 2px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
