const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['-apple-system', 'BlinkMacSystemFont', '"ヒラギノ角ゴ ProN W3"', '"Hiragino Kaku Gothic ProN"', '"Hiragino Sans"', 'メイリオ', 'Meiryo', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
  },
  plugins: [],
}
