/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './customModules/**/*.{html,js,jsx,tsx}',
    './src/pages/**/*.{js, jsx}',
  ],
  theme: {
    extend: {
      colors: {
        dashtext: 'rgb(241, 241, 241)',
        dashBorder: 'rgba(255, 255, 255, 0.2)',
      },
      fontFamily: {
        Archivo: 'Archivo Black',
      },
    },
  },
  plugins: [],
};
