/** @type {import('tailwindcss').Config} */
export default {
  // Add this line to enable manual dark mode toggling
  darkMode: "class", 
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0B0F14",
        accent: "#4FD1FF",
        cyan: "#00E5FF",
        secondary: "#EAEAEA",
      },
      fontFamily: {
        heading: ["Inter", "Space Grotesk", "sans-serif"],
        body: ["Inter", "Roboto", "sans-serif"],
      },
      letterSpacing: {
        wide: "0.05em",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
}