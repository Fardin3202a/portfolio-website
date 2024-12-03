/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Primary':'#8646F4',
        'Secondary':'#F89090',
        'text':'#374151',
        'lightText':'#637381',
        'MainSecondary':'#1F2A37'
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        pacifico: ['Pacifico', 'cursive'],
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};