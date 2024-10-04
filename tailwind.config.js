/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "/index.html",
    "/src/**/*.{js, ts, jsx, tsx}", //this will help look for tailwind classes in files of these extensions
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif']
      },
      // gridTemplateColumns:{
      //   '70/30': '70% 28%' //this is if we were adding grids. 
      // }
    },
  },
  plugins: [],
}

