/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        merienda: ["Merienda", "sans-serif"]
      },
      colors: {
        'green-leaf': '#396C03',
        'orange-solid': '#FF8B00',
        'wheat': '#FFF9F2',
        'lime': '#F0F4EC',
        'dark-green': '#224300',
        'green': '#3D6612'
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
    },
  },
  plugins: [],
}

