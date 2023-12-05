module.exports = {
  plugins: ['@fs/zion'],
  rules: {
    '@fs/zion/prefer-zion-render': 'off',
  },
  overrides: [
    {
      files: ['*.test.[tj]s?(x)'],
      extends: ['plugin:testing-library/react'],
      rules: {
        'testing-library/no-debugging-utils': 'off',
        'testing-library/no-node-access': 'off', // TODO this rule was enabled for new testing-library
      },
    },
    {
      files: ['*.test.[tj]s?(x)'],
      excludedFiles: ['cypress/**/*', '*.cy.[tj]s?(x)'],
      extends: ['plugin:jest-dom/recommended'],
      rules: {
        'jest/no-large-snapshots': 'error',
        'jest/expect-expect': ['warn', { assertFunctionNames: ['expect', '*expect*'] }],
      },
    },
    {
      files: ['*'],
      excludedFiles: ['cypress/**/*', '*.cy.[tj]s?(x)'],
      extends: ['plugin:jest/recommended'],
    },
  ],
}
