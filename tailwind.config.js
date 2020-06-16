const colors = {
  purple: {
    lighter: '#a7a8cc',
    default: '#7E7F9A'
  },
  pink: '#fab1a0',
  crimson: 'crimson'
}

module.exports = {
  purge: false,
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    fontFamily: {
      fixedsys: ['fixedsys', 'monospace']
    },
    extend: {
      spacing: {
        '168': '42rem'
      },
      colors: colors,
      fill: colors
    }
  },
  variants: {},
  plugins: []
}
