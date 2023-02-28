/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,tsx}'],
  theme: {
    extend: {},
    keyframes: {
      typing: {
        '0%': { width: 0 },
        '100%': { width: '100%' },
      },
    },
  },
  plugins: [],
};
