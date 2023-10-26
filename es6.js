/*
 * We use plugin:import/typescript and import/extensions to include ts and tsx files here in es6.js instead
 * of in typescript.js because otherwise eslint-plugin-import complains about importing .ts or .tsx files
 * while linting a normal .js file.
 * */
module.exports = {
  plugins: ['@babel', 'html'],
  extends: ['airbnb-base', 'plugin:import/typescript'],
  env: {
    es2021: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    requireConfigFile: false,
  },
  rules: {
    'no-restricted-exports': 'off', // We need to be able to export default
    'no-console': ['warn', { allow: ['error', 'trace', 'time'] }],
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],
    'no-warning-comments': ['warn', { terms: ['FIXME', 'TODO', 'HACK'], location: 'anywhere' }],
    'prefer-destructuring': 'off',
    camelcase: 'off',
    'no-unused-expressions': 'off', // Disable for better @babel version
    '@babel/no-unused-expressions': ['warn', { allowShortCircuit: true }],
    'import/prefer-default-export': 'off',
    'import/extensions': ['error', 'ignorePackages', { js: 'never', jsx: 'never', ts: 'never', tsx: 'never' }],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/setupTests.[tj]s?(x)',
          '**/*.{cy,spec,stories,test}.[tj]s?(x)',
          '.storybook/**',
          '**/demo/**',
          '**/docs/**',
          '**/fixtures/**',
          'scripts/**',
          'cypress/**',
        ],
        includeTypes: true,
      },
    ],
  },
}
