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
      "retro",
      "coffee",
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
      "winter",
      "dim",
      "nord",
      "sunset",
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      {
        homebrew: 
        {
          "primary": "#5b8e7d",
          "primary-content": "#32021F",
          "secondary": "8b1e3f",
          "secondary-content": "#f0e7d8",
          "accent": "#EF3E36",
          "accent-content": "#f0e7d8",
          "neutral": "#0E0F0F",
          "neutral-content": "#f0e7d8",
          "base-100": "#f0e7d8",
          "base-200": "#D0C7B9",
          "base-300": "#B0A99D",
          "base-content": "#084c61",
          "--rounded-box": "0.2rem", // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "0.2rem", // border radius rounded-btn utility class, used in buttons and similar element
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
          "primary": "#FEDC97",
          "primary-content": "#212323",  
          "secondary": "#296EB4",
          "secondary-content": "#212323",  
          "accent": "#FF928B",
          "accent-content": "#212323",   
          "neutral": "",
          "neutral-content": "",   
          "base-100": "#212323",
          "base-200": "#161817",
          "base-300": "#0E0F0F",
          "base-content": "#5b8e7d",
    
          "--rounded-box": "0.2rem", // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "0.2rem", // border radius rounded-btn utility class, used in buttons and similar element
          "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
          "--animation-btn": "0.25s", // duration of animation when you click on button
          "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
          "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
          "--border-btn": "1px", // border width of buttons
          "--tab-border": "1px", // border width of tabs
          "--tab-radius": "0.5rem", 
        },
      },
    ],
  },
}

