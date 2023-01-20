module.exports = {
  extends: ['plugin:jest/recommended', 'plugin:jest-dom/recommended', 'plugin:testing-library/react', 'prettier'], // Always have prettier last so it can override format rules in the extends before it
  plugins: ['@fs/zion'],
  rules: {
    'jest/no-large-snapshots': 'error',
    '@fs/zion/prefer-zion-render': 'off',
    'testing-library/no-debugging-utils': 'off',
  },
  overrides: [
    {
      files: ['*.test.[tj]s?(x)'],
      rules: {
        'testing-library/no-node-access': 'off', // TODO this rule was enabled for new testing-library
      },
    },
  ],
}
