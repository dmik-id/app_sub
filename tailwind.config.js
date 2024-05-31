/** @type {import('tailwindcss').Config} */
export default {
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // content: ["./index.html"],
  theme: {
    extend: {
      colors(theme){
        return {
          primary:{
            DEFAULT: 'hsl(277, 100%, 50%)'
          }
        }
      }
    },
  },
  plugins: [],
}

