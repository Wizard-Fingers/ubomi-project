/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "myGreen" : "#82bd46",
        "myOrange" : "#ed7c2e",
        "myBlue" : "#5271ff",
      }
    },
  },
  plugins: [],
}

