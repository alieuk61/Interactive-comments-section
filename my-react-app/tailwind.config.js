/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'Moderate-blue': '#5457B6',
        'Soft Red': '#ED6468',
        'Light grayish blue': '#C3C4EF',
        'Pale red': '#FFB8BB',
        'Dark-blue': '#324152',
        'Grayish-Blue': '#67727E',
        'Light-gray': '#EAECF1',
        'Very-light-gray': '#F5F6FA',
        'White': '#FFFFFF'
      }
    },
  },
  plugins: [],
}