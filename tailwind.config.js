/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D2BB2',
        secondary: '#00FAAC',
        tertiary: '#636363'
      }
    },
  },
  plugins: [],
}