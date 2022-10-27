/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#051039',
        'secondary': '#FF0000',
        'tertiary': '#14438B'
      },
    },
  },
  plugins: [],
}