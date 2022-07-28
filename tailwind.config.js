module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minHeight: {
      '0': 0,
      '40': '10rem',
      '96': '24rem'
    },
    extend: {
      borderWidth: {
        '16': '16px'
      },
      inset: {
        'screen': '100vh'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    })
  ],
}
