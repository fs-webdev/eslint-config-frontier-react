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
        '@typescript-eslint/no-use-before-define': ['error', { functions: false }],
        '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }],

        'no-unused-vars': 'off', // @typescript-eslint/no-unused-vars requires this to be off
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],

        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-empty-function': ['error', { allow: ['arrowFunctions'] }],
        '@typescript-eslint/consistent-type-imports': 'error',

        'no-shadow': 'off',
        'no-use-before-define': 'off',

        // TS complains about using the .ts/.tsx extensions in the import statement. so turning this rule off for TS
        'import/extensions': 'off',
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
