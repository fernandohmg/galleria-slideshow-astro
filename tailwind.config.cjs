/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      serif: ["Libre Baskerville", "serif"],
    },
    screens: {
      tablet: "768px",
      desktop: "1280px",
    },
    extend: {
      colors: {
        "7D7D7D": "#7D7D7D",
        E5E5E5: "#E5E5E5",
        F3F3F3: "#F3F3F3",
      },
      fontSize: {
        xxs: "0.563rem",
      },
      backgroundImage: {
        "hover-gradient":
          "linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.841672) 100%)",
      },
    },
  },
  plugins: [],
};
