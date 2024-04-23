/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}",
  "../src/**/*.{html,ts}"],
  theme: {
    extend: {
        container: {
            padding: '1rem',
          },
    },
    variants: {
      extend: {
        // ...
       backgroundOpacity: ['active'],
      }
    },
    colors: {
      'heart': '#C8553D',
      'brass': '#A77D4A'
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        homebrew: 
        {
          "primary": "#5b8e7d",
          "primary-content": "#32021F",
          "secondary": "8b1e3f",
          "secondary-content": "#f0e7d8",
          "accent": "#EF3E36",
          "accent-content": "#f0e7d8",
          "neutral": "#084c61",
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
          "primary-content": "#f0e7d8",  
          "secondary": "#296EB4",
          "secondary-content": "#f0e7d8",  
          "accent": "#FF928B",
          "accent-content": "#f0e7d8",   
          "neutral": "#204144",
          "neutral-content": "#f0e7d8",   
          "base-100": "#212323",
          "base-200": "#161817",
          "base-300": "#0E0F0F",
          "base-content": "#82B0A0",
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
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
    ],
  },
}

