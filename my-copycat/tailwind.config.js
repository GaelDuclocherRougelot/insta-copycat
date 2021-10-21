module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    divideColor: theme => ({
      ...theme('borderColors'),
      'border-primary': '#DBDBDB',
    })
  },
  variants: {},
  plugins: [],
}