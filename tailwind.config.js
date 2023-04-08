const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    
    extend: {
      fontFamily: {
        sans: ['var(--font-jakarta)', ...fontFamily.sans],
      },
      colors: {
        customGrey: {
          100: "#F4F7FD",
          500: "#828FA3",
          800: "#2B2C37",
          900: "#20212C",
        },
        lines: {
          100: "#E4EBFA",
          900: "#3E3F4E",
        },
        primary: "#635FC7",
        primaryHover: "#A8A4FF",
        customRed: "#EA5555",
        customRedHover: "#FF9898",

      }
    },
  },
  plugins: [],
}
