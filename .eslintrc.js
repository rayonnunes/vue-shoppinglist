module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "function-paren-newline": ["error", "multiline"],
    "func-call-spacing": ["error", "always", { "allowNewlines": true }]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
