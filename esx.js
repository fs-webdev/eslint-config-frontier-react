/*
 * ES2022+ ESLint configuration
 * */
module.exports = {
  extends: ['plugin:es-x/restrict-to-es2022', 'plugin:es-x/restrict-to-es2022-intl-api'],
  rules: {
    'es-x/no-array-prototype-toreversed': 'off', // Polyfilled in @fs/react-scripts
  },
}
