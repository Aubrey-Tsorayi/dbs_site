/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        urbanist: ['Urbanist'],
      },
      colors:{
        title: '#1E2A69',
        blue: '#A7BEF2',
        footer: '#FFCF87',
        item: '#F5B69D'
      }
    },
  },
  plugins: [],
}

