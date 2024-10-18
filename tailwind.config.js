/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        copperplate: ['Tussilago bold', 'Copperplate', 'Copperplate Gothic Light', 'fantasy'],
        calibri: ['Calibri', 'Arial', 'sans-serif'],
        arial: ["Arial", "sans-serif"],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #5829a3, #3B82F6)',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        zoomIn: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
      },
      animation: {
        scroll: 'scroll 20s linear infinite',
        zoomIn: 'zoomIn 3s forwards',
      },
    },
  },
  plugins: [],
}

