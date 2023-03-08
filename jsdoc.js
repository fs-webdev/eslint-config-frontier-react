module.exports = {
  plugins: ['jsdoc'],
  overrides: [
    {
      files: ['*.js?(x)', '*.html'],
      rules: {
        'valid-jsdoc': 'warn',
        'jsdoc/check-alignment': 'warn',
        'jsdoc/check-param-names': 'warn',
        'jsdoc/check-syntax': 'warn',
        'jsdoc/check-tag-names': 'warn',
        'jsdoc/check-types': 'warn',
        'jsdoc/implements-on-classes': 'warn',
        'jsdoc/match-description': 'warn',
        'jsdoc/require-description': 'warn',
        'jsdoc/require-hyphen-before-param-description': 'warn',
        'jsdoc/require-param-description': 'warn',
        'jsdoc/require-param-name': 'warn',
        'jsdoc/require-param-type': 'warn',
        'jsdoc/require-param': 'warn',
        'jsdoc/require-returns-check': 'warn',
        'jsdoc/require-returns-description': 'warn',
        'jsdoc/require-returns-type': 'warn',
        'jsdoc/require-returns': 'warn',
        'jsdoc/valid-types': 'warn',
      },
    },
  ],
}
