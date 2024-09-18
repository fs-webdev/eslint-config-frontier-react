/*
 * We can't combine this into the jest.js file because codeclimate uses the jest.js configuration
 * and codeclimate doesn't work with eslint-plugin-jest-dom and eslint-plugin-testing-library
 */
module.exports = {
  extends: ['plugin:jest-dom/recommended', 'plugin:testing-library/react'],
  plugins: ['@fs/zion'],
  rules: {
    '@fs/zion/prefer-zion-render': 'off',
    'testing-library/no-debugging-utils': 'off',
    
    // TODO: consider renaming this file since it effects more than Jest tests
    '@fs/zion/logical-over-directional': 'warn',
  },
}
