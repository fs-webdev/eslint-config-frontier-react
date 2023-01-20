/*
 * We use plugin:import/typescript and import/extensions to include ts and tsx files here in es6.js instead
 * of in typescript.js because otherwise eslint-plugin-import complains about importing .ts or .tsx files
 * while linting a normal .js file.
 * */
module.exports = {
  plugins: ['@babel', 'html'],
  extends: ['airbnb-base', 'plugin:import/typescript'],
  env: {
    es6: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    requireConfigFile: false,
  },
  settings: {
    'import/extensions': ['.js', '.json', '.ts', '.tsx'],
  },
  rules: {
    'no-console': ['warn', { allow: ['error', 'trace', 'time'] }],
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-unused-expressions': 'off', // Disable for better @babel version
    '@babel/no-unused-expressions': ['warn', { allowShortCircuit: true }],
    'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],
    'no-warning-comments': 'warn',
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
  },
}
