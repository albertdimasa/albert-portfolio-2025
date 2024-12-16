/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF0000", // Warna terang untuk neo-brutalism
        secondary: "#00FF00",
        accent: "#0000FF",
      },
      boxShadow: {
        brutal: "5px 5px 0px 0px #000000", // Shadow khas neo-brutalism
      },
      fontFamily: {
        brutal: ["Arial Black", "sans-serif"], // Font tebal untuk neo-brutalism
      },
    },
  },
  plugins: [],
};
