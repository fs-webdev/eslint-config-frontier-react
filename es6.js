module.exports = {
  plugins: ['babel'],
  extends: ['airbnb', 'plugin:prettier/recommended'],
  parser: 'babel-eslint',
  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    'prettier/prettier': [
      'warn',
      {
        printWidth: 100,
        singleQuote: true
      }
    ],

    //override airbnb overbearing rules
    'arrow-parens': [1, 'as-needed'],
    'no-console': 'off',
    'no-param-reassign': ['warn', {props: false}],
    'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],
    'no-unused-expressions': ['warn', {allowShortCircuit: true}]
  }
};
