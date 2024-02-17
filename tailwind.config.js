/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cloud: '#ECEFF3',
        charcoal: '#36394A',
        steel: '#666D80',
        smoke: '#F6F8FA',
        slate: '#818898',
        stone: '#A4ABB8',
        silver: '#DFE1E6',
        midnight: '#0D0D12',
        royal: '#5479FF',
        powder: '#E5EBF0',
      },
    },
  },
  plugins: [],
}