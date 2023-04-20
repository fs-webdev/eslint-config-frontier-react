module.exports = {
  extends: ['plugin:cypress/recommended'],
  plugins: ['cypress', '@fs/zion'],
  rules: {
    'jest/no-large-snapshots': 'error',
    '@fs/zion/prefer-zion-render': 'off',
    'testing-library/no-debugging-utils': 'off',
  },
  overrides: [
    {
      files: ['**/*.spec.*', '**/*.cy.*'],
      rules: {
        'testing-library/await-async-query': 'off',
        'testing-library/no-await-sync-query': 'error',
        'testing-library/no-debug': 'warn',
        'jest/expect-expect': 'off',
        'jest/valid-expect-in-promise': 'off',
        'jest/valid-expect': 'off',
        'babel/no-unused-expressions': 'off',
      },
    },
  ],
}
