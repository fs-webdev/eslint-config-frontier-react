/*
 * We use plugin:import/typescript and import/extensions to include ts and tsx files here in es6.js instead
 * of in typescript.js because otherwise eslint-plugin-import complains about importing .ts or .tsx files
 * while linting a normal .js file.
 * */
module.exports = {
  plugins: ['babel'],
  extends: ['airbnb', 'plugin:import/typescript'],
  parser: 'babel-eslint',
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  settings: {
    'import/extensions': ['.js', '.json', '.ts', '.tsx'],
  },
  rules: {
    // override airbnb overbearing rules
    'no-console': ['warn', { allow: ['error', 'trace', 'time'] }],
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-unused-expressions': 'off',
    'babel/no-unused-expressions': ['warn', { allowShortCircuit: true }],
    'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],
    'no-warning-comments': 1,
    'prefer-destructuring': 'off',
    camelcase: 'off',

    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.stories.js',
          '**/*.test.js',
          '**/*.spec.js',
          '**/demo/**',
          '**/docs/**',
          '**/fixtures/**',
        ],
      },
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
