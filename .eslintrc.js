module.exports = {
  env: {
    browser: true,
    es6: true,
    'jest/globals': true,
    node: true, // Added Node.js environment
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021, // Updated to ES2021
    sourceType: 'module',
  },
  plugins: ['react', 'jest'],
  settings: {
    react: {
      version: 'detect', // Automatically detect the React version
    },
  },
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    eqeqeq: 'error',
    'no-trailing-spaces': 'error',
    'object-curly-spacing': ['error', 'always'],
    'arrow-spacing': ['error', { before: true, after: true }],
    'no-console': 'warn', // Changed to warn
    'react/prop-types': 0, // Keeping it disabled
  },
}
