/** @type {import('tailwindcss').Config} */
import { addDynamicIconSelectors } from "@iconify/tailwind";

module.exports = {
  content: {
    files: ["./src/**/*.{html,ts}"],
  },
  theme: {
    extend: {},
  },
  plugins: [addDynamicIconSelectors()],
};
