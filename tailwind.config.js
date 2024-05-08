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
        "my-black": "#13141b",
        "my-white": "#EEE",
        pink: "#ea7bfe",
        green: "#5bdd66",
      },
    },
  },
  plugins: [],
};
