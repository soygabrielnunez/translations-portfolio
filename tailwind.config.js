module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      aspectRatio: {
        '3/4': '3 / 4',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
