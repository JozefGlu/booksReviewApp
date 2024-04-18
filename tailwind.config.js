/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'light-mode-switch': 'inset -30px 0px 20px -12px rgba(0, 0, 0, 1)',
      },
    },
  },
  plugins: [],
};
