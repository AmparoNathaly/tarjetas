/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '48px',
        principal: '64px',
      },
      colors:{
        '1b4332': '#1b4332',
        '081c15': '#081c15',
        '74c69d': '#74c69d',
        '343a40': '#343a40',
        '48bfe3': '#48bfe3',
        'b5179e': '#b5179e',
        'd8f3dc': '#d8f3dc',
      },
    },
  },
  plugins: [],
}

