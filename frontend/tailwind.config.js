/** @type {import('tailwindcss').Config} */
import { addDynamicIconSelectors } from "@iconify/tailwind";

module.exports = {
  content: {
    files: ["./src/**/*.{html,ts}"],
  },
  theme: {
    extend: {
      colors: {
        "ob-main-bright-green": "#70D560",
        "ob-secondary-light-green": "#A9E6A0",
        "ob-terciary-dark-green": "#17412D",
        "ob-title-medium-green": "#326D3C",
        "ob-danger-red": "#ED6868",
        "ob-white": "#FCFCFC",
        "ob-gray": "#BABABA",
        "ob-black": "#161616",
      },
    },
  },
  plugins: [addDynamicIconSelectors()],
};
