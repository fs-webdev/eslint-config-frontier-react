// this is following the pattern defined here
// https://github.com/prettier/eslint-plugin-prettier#recommended-configuration
const prettierConfig = require('./prettierConfig')

module.exports = {
  extends: ['plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': ['warn', prettierConfig],
  },
}
