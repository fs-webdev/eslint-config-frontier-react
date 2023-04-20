module.exports = {
  extends: ['plugin:cypress/recommended'],
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.cy.{js,ts,tsx}'],
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
      },
    },
  ],
}
