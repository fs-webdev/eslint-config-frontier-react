module.exports = {
  plugins: ['react-hooks'],
  extends: ['airbnb', 'prettier'], // Always have prettier last so it can override format rules in the extends before it'prettier'],
  env: {
    browser: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
  rules: {
    'react/prop-types': 'off',
    'react/jsx-filename-extension': 'off',
    'react/require-default-props': 'off',
    'react/no-unknown-property': ['error', { ignore: ['css', 'columns'] }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/function-component-definition': 'off', // TODO look into this more
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],

    // Overrides airbnb's rule
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        assert: 'either', // fs-styles does not support nesting currently
      },
    ],
  },
}
