/** @type {import('tailwindcss').Config} */
import { addDynamicIconSelectors } from "@iconify/tailwind";

module.exports = {
  content: {
    files: ["./src/**/*.{html,ts}"],
  },
  theme: {
    extend: {
      colors: {
        "dark-green": "#17412D",
        "medium-green": "#326D3C",
        "bright-green": "#70D560",
        "light-green": "#A9E6A0",
      },
    },
  },
  plugins: [addDynamicIconSelectors()],
};
