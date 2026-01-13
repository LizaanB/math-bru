/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E88E5',
        secondary: '#00BCD4',
        accent: {
          yellow: '#FFB300',
          orange: '#FF9800',
          red: '#E53935',
          green: '#4CAF50',
        },
        mathBru: {
          blue: '#1E88E5',
          cyan: '#00BCD4',
          yellow: '#FFB300',
          orange: '#FF9800',
          red: '#E53935',
          green: '#4CAF50',
        },
        success: '#4CAF50',
        warning: '#FFB300',
        danger: '#E53935',
      },
      fontFamily: {
        'display': ['Arial Black', 'Impact', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
