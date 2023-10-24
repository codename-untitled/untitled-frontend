/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      black: '#151515',
      orange: '#FFFBF5',
      grey: '#AEAEAE',
      ...colors,
    },
  },
  plugins: [],
};
