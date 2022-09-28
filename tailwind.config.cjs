/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx, html, css}"],
  theme: {
    extend: {
      colors: {
        text_primary: '#252525',
        text_secondary: '#6c6d7a',
        secondary: '#757685'
      },
      fontFamily: {
        'kanit': ['Kanit', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
  ],
}
