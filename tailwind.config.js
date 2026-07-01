/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6",
        secondary: "#8B5CF6",
        accent: "#06B6D4",
        dark: "#030712",
        surface: "#111827",
      },

      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },

      boxShadow: {
        glass: "0 8px 32px rgba(0,0,0,.25)",
      },

      backdropBlur: {
        xs: "2px",
      },

      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "glow 3s ease-in-out infinite",
      },

      keyframes: {
        float: {
          "0%,100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-12px)",
          },
        },

        glow: {
          "0%,100%": {
            boxShadow: "0 0 15px #3B82F6",
          },
          "50%": {
            boxShadow: "0 0 40px #8B5CF6",
          },
        },
      },
    },
  },
  plugins: [],
}