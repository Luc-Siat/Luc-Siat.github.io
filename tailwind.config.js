/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
        container: {
            padding: '1rem',
          },
    },
    colors: {
        'cwhite' : '#f0e7d8',
        'cgreen' : '#709176', 
        'cblue': '#084c61',
        'base-0': '#232A33',
    },
  },
  plugins: [require("daisyui")],
}

