const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
        nunito: ["Nunito", ...defaultTheme.fontFamily.sans],
        domine: ["Domine", ...defaultTheme.fontFamily.serif]
      },
      colors: {
        background: '#393939',
        primary: '#76A836',
        secondary: '#FEFAE0',
        gray: '#F9F9F9',
        darkgray: '#727272'
      }
    },
  },
  plugins: [],
}

