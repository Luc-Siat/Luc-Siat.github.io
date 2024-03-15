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
  daisyui: {
    themes: [
    {
      polka: 
      {
        "primary": "#084c61",
        "secondary": "#709176",
        "accent": "#084c61",
        "neutral": "#f0e7d8",
        "base-100": "#f0e7d8",
        "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
        "--rounded-btn": "0.5rem", // border radius rounded-btn utility class, used in buttons and similar element
        "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
        "--animation-btn": "0.25s", // duration of animation when you click on button
        "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
        "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
        "--border-btn": "1px", // border width of buttons
        "--tab-border": "1px", // border width of tabs
        "--tab-radius": "0.5rem", 
      },
      darkroast: 
      {
        "primary": "#5b8e7d",
        "secondary": "#ca895f",
        "accent": "#BA2D0B",
        "neutral": "#E3E4DB",
        "base-100": "#303433",
        "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
        "--rounded-btn": "0.5rem", // border radius rounded-btn utility class, used in buttons and similar element
        "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
        "--animation-btn": "0.25s", // duration of animation when you click on button
        "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
        "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
        "--border-btn": "1px", // border width of buttons
        "--tab-border": "1px", // border width of tabs
        "--tab-radius": "0.5rem", 
      },
    },
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
    "dim",
    "nord",
    "sunset",],
  },
}

