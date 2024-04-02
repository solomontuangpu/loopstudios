/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      lg: { max: "960px" },
      md: { max: "680px" },
      sm: { max: "375px" },
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
