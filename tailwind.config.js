/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
    "./.idea/**/*.{js,jsx,ts,tsx,html}",
    "./src/app4.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#fc8019',
        secondary: '#686b78',
        success: '#48c479',
        background: '#f5f5f5',
        cardBg: '#ffffff',
        textPrimary: '#3e4152',
        textSecondary: '#686b78',
        border: '#e9e9eb'
      },
      fontFamily: {
        sans: ['ProximaNova', 'Arial', 'Helvetica Neue', 'sans-serif']
      },
      animation: {
        shimmer: 'shimmer 2s ease-in-out infinite alternate',
        fadeIn: 'fadeIn 0.3s ease-in-out',
        slideIn: 'slideIn 0.3s ease-out'
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundColor: '#eee' },
          '100%': { backgroundColor: '#f5f5f5' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideIn: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      }
    },
  },
  plugins: [],
}