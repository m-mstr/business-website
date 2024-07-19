/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightgrey: '#D6D7DE',
        darkblue: '#242B51',
        compblue: '#242B51'
      }
    },
  },
  plugins: [],
}

