export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        primary: "#004F27", // Oregon green
        secondary: "#FEE123", // Oregon yellow
        dark: "#1A1A1A",
        light: "#F5F5F5",
        accent: "#4CAF50", // Green accent for tech elements
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Montserrat", "system-ui", "sans-serif"],
      },
    },
  },
}