module.exports = {
  /* This is put in the overrides section because otherwise all .js files get passed through the typescript linter.
   * This was happening and we got errors everywhere that types weren't being used in all .js files...
   * */
  overrides: [
    {
      files: ['*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        warnOnUnsupportedTypeScriptVersion: false,
      },
      extends: ['plugin:@typescript-eslint/recommended', 'prettier'], // Always have prettier last so it can override format rules in the extends before it
      rules: {
        'no-use-before-define': 'off', // @typescript-eslint/no-use-before-defined requires this to be off
        '@typescript-eslint/no-use-before-define': ['error', { functions: false }],

        'no-unused-vars': 'off', // @typescript-eslint/no-unused-vars requires this to be off
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],

        'no-empty-functions': 'off', // @typescript-eslint/no-empty-function requires this to be off
        '@typescript-eslint/no-empty-function': ['error', { allow: ['arrowFunctions'] }],

        '@typescript-eslint/consistent-type-imports': 'error',

        '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }],
      },
    },
    {
      files: ['*.test.ts?(x)'],
      rules: {
        '@typescript-eslint/no-non-null-assertion': 'off', // We can know for sure if something is null or not for tests because we made the mock data
      },
    },
  ],
}
