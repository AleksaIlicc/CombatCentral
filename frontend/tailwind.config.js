/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        red: '#ab1c29',
        'transparent-red': '#ab1c29',
        black: '#270808',
        gray: '#555c73',
      },
    },
  },
  plugins: [],
};
