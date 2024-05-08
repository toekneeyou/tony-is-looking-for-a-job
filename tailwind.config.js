/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "pink-glow": "0px 0px 10px var(--pink)",
      },
      dropShadow: {
        "pink-glow": "0px 0px 5px var(--pink)",
      },
      colors: {
        "app-black": "#13141b",
        "app-white": "#EEE",
        pink: "#ea7bfe",
        green: "#5bdd66",
      },
      margin: {
        "1r": "1rem",
        "2r": "2rem",
        "3r": "3rem",
        "4r": "4rem",
        "5r": "5rem",
      },
      padding: {
        "1r": "1rem",
        "2r": "2rem",
        "3r": "3rem",
        "4r": "4rem",
        "5r": "5rem",
      },
      fontSize: {
        "1r": "1rem",
        "2r": "2rem",
        "3r": "3rem",
        "4r": "4rem",
        "5r": "5rem",
      },
    },
  },
  plugins: [],
};
