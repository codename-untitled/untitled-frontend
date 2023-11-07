/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      ...colors,
      black: '#151515',
      orange: '#FFFBF5',
      grey: '#AEAEAE',
      offBlack: '#000000b3',
      chartPurple: '#9923AC',
      offWhite: '#FAF9F6',
      chartBlue: '#1EC1CB'
    },
  },
  plugins: [],
};
