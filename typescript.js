module.exports = {
  /* This is put in the overrides section because otherwise all .js files get passed through the typescript linter.
   * This was happening and we got errors everywhere that types weren't being used in all .js files...
   * */
  overrides: [
    {
      files: ['*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      parserOptions: { warnOnUnsupportedTypeScriptVersion: false },
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: {
        'no-use-before-define': 'off', // Turning off because we have the TS version off
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }],

        'no-unused-vars': 'off', // @typescript-eslint/no-unused-vars requires this to be off
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],

        // TS complains about using the .ts/.tsx extensions in the import statement. so turning this rule off for TS
        'import/extensions': 'off',
      },
    },
  ],
}
