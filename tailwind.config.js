/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: {
          blue: '#4540DC',
          light: "#F6F7FC",
          dark: '#2B2A37'
        }
      },
      flex: {
        '2': '2 2 0%'
      }
    },
  },
  plugins: [],
}