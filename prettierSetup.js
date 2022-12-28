// this is following the pattern defined here
// https://github.com/prettier/eslint-plugin-prettier#recommended-configuration
module.exports = {
  extends: ['plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        arrowParens: 'always',
        printWidth: 120,
        semi: false,
        singleQuote: true,
      },
    ],
  },
}
