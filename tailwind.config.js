/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#1c2230",
        secandry: "#181e2a",
        btn: "rgb(66 176 209)",
        btnhover: "rgb(140 218 228 )",
        link: "rgb(103 219 218 )",
        linkhover: "#42b0d1",
      },
      screens: {
        sm: "576",
        md: "768px",
        lg: "922px",
        xl: "1200px",
        "2xl": "1400px",
      },
      keyframes: {
        move: {
          "0%": { transform: "translateX(10px)" },
          "100%": { transform: "translateX(20px)" },
        },
      },
      animation: {
        move: "move 0.5s infinite linear alternate",
      },
    },
  },
  plugins: [],
};
