/*
 * We use plugin:import/typescript and import/extensions to include ts and tsx files here in es6.js instead
 * of in typescript.js because otherwise eslint-plugin-import complains about importing .ts or .tsx files
 * while linting a normal .js file.
 * */
module.exports = {
  plugins: ['@babel', 'json', 'html'],
  extends: ['airbnb-base', 'plugin:import/typescript'],
  env: {
    es2021: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    requireConfigFile: false,
  },
  rules: {
    'no-console': ['warn', { allow: ['error', 'trace', 'time'] }],
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],
    'no-warning-comments': ['warn', { terms: ['FIXME', 'TODO', 'HACK'], location: 'anywhere' }],
    'prefer-destructuring': 'off',
    camelcase: 'off',

    'no-unused-expressions': 'off', // Disable for better @babel version
    '@babel/no-unused-expressions': ['warn', { allowShortCircuit: true }],

    'import/extensions': ['error', 'ignorePackages', { js: 'never', jsx: 'never', ts: 'never', tsx: 'never' }],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/setupTests.[tj]s?(x)',
          '**/*.stories.[tj]s?(x)',
          '**/*.test.[tj]s?(x)',
          '**/*.spec.[tj]s?(x)',
          '**/demo/**',
          '**/docs/**',
          '**/fixtures/**',
        ],
      },
    ],
  },
}
