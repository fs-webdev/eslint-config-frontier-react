module.exports = {
  plugins: ['html', 'json'],
  extends: [
    '@fs/eslint-config-frontier-react/es6',
    '@fs/eslint-config-frontier-react/react',
    '@fs/eslint-config-frontier-react/jest',
    '@fs/eslint-config-frontier-react/test-helpers',
    '@fs/eslint-config-frontier-react/noFixRules',
    '@fs/eslint-config-frontier-react/dont-need-lodash',
    '@fs/eslint-config-frontier-react/prettierSetup',
  ],
}
