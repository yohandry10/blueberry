/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brandPurple: '#8B3C96', // Morado exacto del logo
      }
    },
  },
  plugins: [],
};
