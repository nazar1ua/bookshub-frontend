const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{html,js,vue,ts}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      minHeight: {
        'page': 'calc(100vh - 4rem)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}