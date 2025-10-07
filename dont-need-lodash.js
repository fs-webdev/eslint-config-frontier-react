module.exports = {
  extends: ['plugin:you-dont-need-lodash-underscore/compatible'],
  rules: {
    'you-dont-need-lodash-underscore/chunk': 'off',
    'you-dont-need-lodash-underscore/difference': 'off',
    'you-dont-need-lodash-underscore/fromPairs': 'off',
    'you-dont-need-lodash-underscore/intersection': 'off',
    'you-dont-need-lodash-underscore/groupBy': 'off',
    'you-dont-need-lodash-underscore/minBy': 'off',
    'you-dont-need-lodash-underscore/maxBy': 'off',
    'you-dont-need-lodash-underscore/sortBy': 'off',
    'you-dont-need-lodash-underscore/debounce': 'off',
    'you-dont-need-lodash-underscore/throttle': 'off',
    'you-dont-need-lodash-underscore/extend': 'off',
    'you-dont-need-lodash-underscore/pickBy': 'off',
    'you-dont-need-lodash-underscore/clone-deep': 'off', // We'd rather turn off this ESLint rule instead of polyfilling for the 7% unsupported environments https://caniuse.com/?search=structuredclone
  },
}
