/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ogRed: "#e50914",
        ogRedHover: "#c11119",
      },
      transitionProperty: {
        bgColor: "background-color",
      },
      transitionTimingFunction: {
        ogTrans: "cubic-bezier(0.9, 0, 0.51, 1)",
        ogTransHover: "cubic-bezier(0.5, 0, 0.1, 1)",
      },
      transitionDuration: {
        "250ms": "250ms",
      },
    },
  },
  plugins: [],
};
