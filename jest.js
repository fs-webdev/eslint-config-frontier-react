module.exports = {
  plugins: ['@fs/zion'],
  rules: {
    '@fs/zion/prefer-zion-render': 'off',
  },
  overrides: [
    {
      files: ['*.test.[tj]s?(x)'],
      extends: ['plugin:jest-dom/recommended', 'plugin:testing-library/react'],
      rules: {
        'jest/no-large-snapshots': 'error',
        'testing-library/no-debugging-utils': 'off',
        'testing-library/no-node-access': 'off', // TODO this rule was enabled for new testing-library
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
