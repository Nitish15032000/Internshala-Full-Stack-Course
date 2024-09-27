/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  darkMode: 'class',
  theme: {
    
    extend: {
      animation: {
        'fade-in': 'fadeIn 2s ease-in-out',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },

      dropShadow :{
        'custom-cyan': '2px 2px 20px cyan',
        'custom-white': '2px 2px 20px rgba(255, 255, 255, 1)',
      }
    },
  },
  plugins: [],
}

