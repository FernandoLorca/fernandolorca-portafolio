/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        violet: {
          100: '#f4e8fc',
          200: '#e8d2f9',
          300: '#d6adf5',
          400: '#ad5ceb',
          500: '#811ad1',
          600: '#5d1396',
          700: '#440d6d',
          800: '#270840',
          900: '#140420',
        },
        fucsia: {
          100: '#faeaef',
          200: '#f6d5e0',
          300: '#eeb4c6',
          400: '#dd698e',
          500: '#bf2b5a',
          600: '#891f41',
          700: '#64172f',
          800: '#3a0d1b',
          900: '#1d070e',
        },
        cyan: {
          100: '#eceff9',
          200: '#d9e0f2',
          300: '#bac6e8',
          400: '#758ed1',
          500: '#3b5ab0',
          600: '#2a417e',
          700: '#1f2f5c',
          800: '#121b36',
          900: '#090e1b',
        },
      },
    },
  },
  plugins: [],
};
