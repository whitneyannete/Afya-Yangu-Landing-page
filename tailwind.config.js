/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
        fontFamily: {
            lexend: ['Lexend', 'sans-serif'],
        },
        colors: {
            'afyablue': {
              DEFAULT: '#E7EEFF',
              50: "#E7EEFF",
              100: "#E5EBF8",
              200: "#0047BA",
              300: "#BBD7EA",
              400: "#012063",
              500: "#0270BD",
              600: "#b0d6e3",
              700: "#0E64A3",
              900: "#00144A",
              950: "#002063"
            },
            'primary': {
              DEFAULT: '#231F20',
              50: "#231F20",
              100: "#1C1C1C",
              200: "#475467",
              300: "#111",
              400: "#F5EDE4",
              500: "#F6F4EC",
            },
            
        },
    },
},
  plugins: [],
}
