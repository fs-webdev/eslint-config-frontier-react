// we don't include typescript out of the box here because the eslint typescript plugin REQUIRES typescript
// to be installed. The vast majority of apps do not use typescript at this time, so it make zero sense for
// them to have to install typescript, just to use eslint.

module.exports = {
  plugins: ['json'],
  extends: [
    '@fs/eslint-config-frontier-react/react',
    '@fs/eslint-config-frontier-react/es6',
    '@fs/eslint-config-frontier-react/jest',
    '@fs/eslint-config-frontier-react/dont-need-lodash',
    '@fs/eslint-config-frontier-react/prettierSetup', // Always have prettier last so it can override format rules in the extends before it
  ],
}
