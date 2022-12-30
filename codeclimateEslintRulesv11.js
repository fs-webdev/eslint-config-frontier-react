// These are used within these deps https://github.com/codeclimate/codeclimate-eslint/blob/channel/eslint-8/package.json for channel: 'eslint-8'

// jest linting not enabled for CodeClimate because it is behind; don't CodeClimate-lint test files nor the setupTests file
// jsdoc linting not enabled for CodeClimate because it is optional.

module.exports = {
  plugins: ['babel', 'json', 'html', 'react-hooks'],
  extends: ['airbnb', 'plugin:import/typescript', 'prettier/react', 'plugin:prettier/recommended'],
  env: { es6: true, browser: true },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    requireConfigFile: false,
    ecmaFeatures: { jsx: true },
    babelOptions: { presets: ['@babel/preset-react'] },
  },
  rules: {
    'no-console': ['warn', { allow: ['error', 'trace', 'time'] }],
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],
    'no-warning-comments': ['warn', { terms: ['FIXME', 'TODO', 'HACK'], location: 'anywhere' }],
    'prefer-destructuring': 'off',
    camelcase: 'off',
    'no-unused-expressions': 'off',
    'babel/no-unused-expressions': ['warn', { allowShortCircuit: true }],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/setupTests.[tj]s?(x)',
          '**/*.stories.js',
          '**/*.test.js',
          '**/*.spec.js',
          '**/demo/**',
          '**/docs/**',
          '**/fixtures/**',
        ],
      },
    ],

    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/label-has-associated-control': ['error', { assert: 'either' }],

    'react/prop-types': 'off',
    'react/jsx-filename-extension': 'off',
    'react/require-default-props': 'off',
    'react/jsx-no-bind': 'warn',
    'react/no-unknown-property': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'prettier/prettier': ['warn', { arrowParens: 'always', printWidth: 120, semi: false, singleQuote: true }],
  },
  overrides: [
    {
      files: ['*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      parserOptions: { warnOnUnsupportedTypeScriptVersion: false },
      extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
      rules: {
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error', { functions: false }],

        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],

        'no-empty-functions': 'off',
        '@typescript-eslint/no-empty-function': ['error', { allow: ['arrowFunctions'] }],

        '@typescript-eslint/consistent-type-imports': 'error',

        '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }],
      },
    },
    {
      files: ['*.test.ts?(x)'],
      rules: {
        '@typescript-eslint/no-non-null-assertion': 'off',
      },
    },
  ],
}
