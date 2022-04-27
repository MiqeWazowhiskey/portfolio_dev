const theme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: "jit",
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        play: ["Play", "sans-serif"],
        raleway: ["Raleway", "cursive"],
      },
      colors: {
        "primary-light": "#ecfccb",
        "primary-dark": "#111827",
        'chiffon': {
          '50': '#fefffc', 
          '100': '#fdfffa', 
          '200': '#fafef2', 
          '300': '#f7feea', 
          '400': '#f2fddb', 
          '500': '#ecfccb', 
          '600': '#d4e3b7', 
          '700': '#b1bd98', 
          '800': '#8e977a', 
          '900': '#747b63'
      },
        'malibu': {
          DEFAULT: '#7DD3FC',
          '50': '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#F5FBFF',
          '300': '#CDEEFE',
          '400': '#A5E0FD',
          '500': '#7DD3FC',
          '600': '#46C0FB',
          '700': '#0FAEF9',
          '800': '#058CCC',
          '900': '#036695'
        },
        'light-orchid': {
          DEFAULT: '#D285C7',
          '50': '#FFFFFF',
          '100': '#FEFCFE',
          '200': '#F3DEF0',
          '300': '#E8C1E2',
          '400': '#DDA3D5',
          '500': '#D285C7',
          '600': '#C35CB4',
          '700': '#A93E99',
          '800': '#802F74',
          '900': '#57204F'
        },
      }
    },
  },
  plugins: [],
}
