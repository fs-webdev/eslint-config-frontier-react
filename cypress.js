module.exports = {
  extends: ['plugin:cypress/recommended'],
  overrides: [
    {
      files: ['**/*.spec.*', '**/*.cy.*'],
      plugins: ['mocha'],
      rules: {
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        '@babel/no-unused-expressions': 'off', // Disabled to allow chai expect style assertions.
        'mocha/consistent-spacing-between-blocks': 'error', // Good for readability and consistence.
        'mocha/no-async-describe': 'error', // Helpful to make sure describes are not async.
        'mocha/no-empty-description': 'error', // Make sure there are titles for suites/tests.
        'mocha/no-exports': 'error', // Shouldn't export from a test file, use a utility file instead if needed to export something.
        'mocha/no-identical-title': 'error', // This is an easy way to see if you just copy and pasted a test and didn't change the title.
        'mocha/no-nested-tests': 'error', // This is a developer error and the nested tests will be ignored.
        'mocha/no-return-and-callback': 'error', // Mocha v3 errors on this as it is confusing to do.
        'mocha/no-sibling-hooks': 'error', // It is confusing to have multiple before or other hooks on the same level.
        'mocha/no-exclusive-tests': 'error', // Reminds to remove .only tests or to give a reason why they are skipped.
        'mocha/no-skipped-tests': 'error', // Reminds to remove .skip tests or to give a reason why they are skipped.
      },
    },
    {
      files: ['cypress.config.*', 'nyc.config.*'],
      rules: {
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
      },
    },
  ],
}
