/** @type {import('tailwindcss').Config} */
import { addDynamicIconSelectors } from "@iconify/tailwind";

module.exports = {
  content: {
    files: ["./src/**/*.{html,ts}"],
  },
  theme: {
    extend: {
      iconImage: {
        'question': "url('src/assets/question-mark-circle.png')"
      },
      colors: {
        'main': '#70D560',
        'secondary': '#A9E6A0',
        'dark': '#1C1B17',

      }
    },
  },
  plugins: [addDynamicIconSelectors()],
};
