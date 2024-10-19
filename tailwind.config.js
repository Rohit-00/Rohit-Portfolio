/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Ubuntu mono': ['Ubuntu mono', 'sans-serif'],
      },

    },
  },

  plugins: [],
}

