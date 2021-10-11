/*
 * We can't combine this into the jest.js file because codeclimate uses the jest.js configuration
 * and codeclimate doesn't work with eslint-plugin-jest-dom and eslint-plugin-testing-library
 */
module.exports = {
  extends: ['plugin:jest-dom/recommended', 'plugin:testing-library/react'],
  plugin: ['@fs/zion'],
  rules: {
    '@fs/zion/prefer-zion-render': 'error',
  },
}
