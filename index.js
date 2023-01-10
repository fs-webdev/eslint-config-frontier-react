module.exports = {
  plugins: ['json'],
  extends: [
    '@fs/eslint-config-frontier-react/react',
    '@fs/eslint-config-frontier-react/es6',
    '@fs/eslint-config-frontier-react/typescript',
    '@fs/eslint-config-frontier-react/jest',
    // '@fs/eslint-config-frontier-react/noFixRules',
    '@fs/eslint-config-frontier-react/dont-need-lodash',
    '@fs/eslint-config-frontier-react/prettierSetup', // Always have prettier last so it can override format rules in the extends before it
  ],
}
