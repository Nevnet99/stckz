/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ['"Coven"', "sans-serif"],
      "sans-outline": ['"Conven Outlined"', "sans-serif"],
    },
    extend: {},
  },
  daisyui: {
    themes: ["night"],
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
