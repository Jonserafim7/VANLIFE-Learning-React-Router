/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
        gridTemplateColumns: {
          'custom1': 'repeat(auto-fill, minmax(14.375rem, 1fr))',
        },
      }
  },
  plugins: [],
}

