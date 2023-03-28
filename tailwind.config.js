/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        veryDarkBlue: 'hsl(233, 47%, 7%)', //main background
        darkDesaturatedBlue: 'hsl(244, 38%, 16%)', //card background
        softViolet: 'hsl(277, 64%, 61%)', //accent
        white: 'hsl(0, 0%, 100%)', //main heading
        slightlyTransWhite1: 'hsla(0, 0%, 100%, 0.75)', //main paragraph
        slightlyTransWhite2: 'hsla(0, 0%, 100%, 0.6)', //stats heading
      },
      fontFamily: {
        inter: ['Inter', 'sans serif'],
        deca: ['Lexend Deca', 'sans serif'],
      },
      backgroundImage: (theme) => ({
        'small-screen': "url('../images/image-header-mobile.jpg')",
        'medium-screen': "url('../images/image-header-desktop.jpg')",
      }),
    },
  },
  plugins: [],
};
