/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "bring-to-front": "bring-to-front 750ms ease-in-out forwards",
        "move-to-back": "move-to-back 750ms ease-in-out forwards",
      },
      boxShadow: {
        "pink-glow": "0px 0px 10px var(--pink)",
      },
      colors: {
        "app-black": "#13141b",
        "app-white": "#EEE",
        pink: "#ea7bfe",
        green: "#5bdd66",
      },
      dropShadow: {
        "pink-glow": "0px 0px 5px var(--pink)",
      },
      fontSize: {
        "1rem": "1rem",
        "2rem": "2rem",
        "3rem": "3rem",
        "4rem": "4rem",
        "5rem": "5rem",
      },
      gridTemplateColumns: {
        "2-full": "repeat(2, 100%)",
        "3-full": "repeat(3, 100%)",
      },
      height: {
        "100vh": "var(--100vh)",
      },
      keyframes: {
        "bring-to-front": {
          "0%": { transform: "translateX(32px) scale(0.9)", zIndex: 0 },
          "50%": { transform: "translateX(300px) scale(1)", zIndex: 0 },
          "70%": { zIndex: 1 },
          "100%": { transform: "translateX(0)", zIndex: 1 },
        },
        "move-to-back": {
          "0%": { transform: "translateX(0) scale(1)", zIndex: 1 },
          "50%": { transform: "translateX(0px) scale(0.9)", zIndex: 1 },
          "70%": { zIndex: 0 },
          "100%": { transform: "translateX(32px) scale(0.9)", zIndex: 0 },
        },
      },
      margin: {
        "1rem": "1rem",
        "2rem": "2rem",
        "3rem": "3rem",
        "4rem": "4rem",
        "5rem": "5rem",
      },
      padding: {
        "1rem": "1rem",
        "2rem": "2rem",
        "3rem": "3rem",
        "4rem": "4rem",
        "5rem": "5rem",
      },
      width: {
        "100vw": "var(--100vw)",
      },
      maxWidth: {
        text: "50ch",
        "medium-text": "40ch",
        "small-text": "30ch",
      },
    },
  },
  plugins: [],
};
