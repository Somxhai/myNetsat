/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx, html, css}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        secondary: '#757685'
      },
      fontFamily: {
        'mitr': ['Mitr', 'sans-serif'],
        'inter': ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
