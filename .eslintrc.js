module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
    jest: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'no-console': 'off', // Allow console.log in demo
    'space-before-function-paren': ['error', 'never'],
    'semi': ['error', 'always']
  }
};