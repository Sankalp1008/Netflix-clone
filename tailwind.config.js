/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        'black-rgba' : 'rgb(0 0 0 / 81%)',
      }
    },
  },
  plugins: [],
}