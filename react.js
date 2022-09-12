module.exports = {
  plugins: ['react-hooks'],
  extends: ['prettier/react'],
  env: {
    browser: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react/prop-types': 'off',
    'react/jsx-filename-extension': 'off',
    'react/require-default-props': 'off',
    'react/no-unknown-property': ['error', { ignore: ['css', 'columns'] }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    // 'react/jsx-newline': 'off',
  },
}
