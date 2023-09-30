
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        buttonColor: '#120B48'
      }, 
      color:{
        colorBlack:'hsba(0, 0%, 0%, 0.75)'
      },
      fontFamily:{
        'workSans' :["'Work Sans', sans-serif"],
        'sora': ["'Sora', sans-serif"],
        'inter' : ["'Sora', sans-serif"]
      }


    },
  },
  plugins: [],
}