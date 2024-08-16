module.exports = {
  /* This is put in the overrides section because otherwise all .js files get passed through the typescript linter.
   * This was happening and we got errors everywhere that types weren't being used in all .js files...
   * */
  overrides: [
    {
      files: ['*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      parserOptions: { warnOnUnsupportedTypeScriptVersion: false },
      extends: ['plugin:@typescript-eslint/recommended', 'plugin:@typescript-eslint/stylistic'],
      rules: {
        'no-use-before-define': 'off', // @typescript-eslint/no-use-before-defined requires this to be off
        '@typescript-eslint/no-use-before-define': ['error', { functions: false }],
        '@typescript-eslint/consistent-type-imports': ['error', { fixStyle: 'inline-type-imports' }], // We prefer fixing to inline over separate type imports but are ok with existing or manually made separate type imports
        '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }],
        'no-shadow': 'off', // @typescript-eslint/no-shadow requires this to be off
        '@typescript-eslint/no-shadow': 'error',
        '@typescript-eslint/consistent-type-definitions': 'off',
      },
    },
  ],
}
