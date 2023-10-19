/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'Moderate-blue': '#5457B6',
        'Soft-red': '#ED6468',
        'Light-grayish-blue': '#C3C4EF',
        'Pale-red': '#FFB8BB',
        'Dark-blue': '#324152',
        'Grayish-blue': '#67727E',
        'Light-gray': '#EAECF1',
        'Very-light-gray': '#F5F6FA',
        'White': '#FFFFFF'
      }, 
      padding:{
        '25px' : '25px'
      },
      fontFamily: {
        'Rubik': 'Rubik, sans-serif'
      },
    },
  },
  plugins: [],
}