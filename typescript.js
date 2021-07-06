module.exports = {
  /* This is put in the overrides section because otherwise all .js files get passed through the typescript linter.
   * This was happening and we got errors everywhere that types weren't being used in all .js files...
   * */
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: {
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }],
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],

        // TS complains about using the .ts/.tsx extensions in the import statement. so turning this rule off for TS
        'import/extensions': 'off',
      },
    },
  ],
}
