/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xl: { max: "1200px"},
      lg: { max: "1080px" },
      md: { max: "960px" },
      sm: {max: "680px"},
      xsm: { max: "580px" },
    },
    colors: {
      white: "hsl(0, 0%, 100%)",
      black: "hsl(0, 0%, 0%)",
      gray: "hsl(0, 0%, 55%)",
      darkGray: "hsl(0, 0%, 41%)",
    },
    extend: {
      fontFamily: {
        josefin: [ "Josefin Sans", "sans-serif"],
         alata : ["Alata", "sans-serif"]
      }
    },
  },
  plugins: [],
};
