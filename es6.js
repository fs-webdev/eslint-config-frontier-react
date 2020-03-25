module.exports = {
  plugins: ['babel'],
  extends: ['airbnb'],
  parser: 'babel-eslint',
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    // override airbnb overbearing rules
    'no-console': ['warn', { allow: ['error'] }],
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-unused-expressions': 'off',
    'babel/no-unused-expressions': ['warn', { allowShortCircuit: true }],
    'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],
    'no-warning-comments': 1,
    'prefer-destructuring': 'off',

    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/*.stories.js', '**/*.test.js', '**/demo/**'] },
    ],

    'jsx-a11y/label-has-for': 0, // this is deprecated in future versions so disable now
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        assert: 'either', // fs-styles does not support nesting currently
      },
    ],
  },
}
