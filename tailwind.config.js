/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Default body
        heading: ['Poppins', 'sans-serif'], // For headings
      },
        colors: {
        cream: "#E7E8D1",
        writing:'#B85042'
      },

    },
  },
  plugins: [],
};
