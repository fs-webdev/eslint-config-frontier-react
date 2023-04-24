module.exports = {
  extends: ['plugin:cypress/recommended'],
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.{spec,test,cy}.{js,ts,tsx}', 'cypress.config.js'],
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.spec.*', '**/*.cy.*'],
      rules: {
        'jest/expect-expect': 'off',
        'jest/valid-expect-in-promise': 'off',
        'jest/valid-expect': 'off',
        '@babel/no-unused-expressions': 'off',
        'testing-library/await-async-utils': 'off',
        'testing-library/prefer-screen-queries': 'off',
      },
    },
  ],
}
