module.exports = {
  plugins: ['react-hooks'],
  extends: ['prettier/react'],
  env: {
    browser: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'react/prop-types': 'off'
  }
};
