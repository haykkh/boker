module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'standard'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  parser: 'babel-eslint',
  plugins: ['import', 'react', 'prettier', 'jsx-a11y'],
  rules: {
    'no-unused-vars': [2, { varsIgnorePattern: 'React|jsx|h' }],
    'react/jsx-uses-vars': 2,
    'no-undef': 0,
    'import/no-absolute-path': 0
  }
}
