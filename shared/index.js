/**
 * @fs/eslint-config-frontier-react/shared
 * 
 * Self-contained ESLint configuration for FamilySearch projects.
 * This configuration is completely independent of external config packages like Airbnb,
 * incorporating all necessary rules directly to provide complete control over ESLint updates
 * and rule management. It includes comprehensive rules for JavaScript, TypeScript, React,
 * testing frameworks, and additional quality checks.
 */

module.exports = {
  /*
   * This configuration is completely self-contained and incorporates all the rules and configuration
   * from @fs/eslint-config-tree, @fs/eslint-config-frontier-react, and eslint-config-airbnb-base
   * directly to remove all external dependencies. The configuration includes the enhanced rules
   * from the Tree team that provide additional checks and a tightened-down configuration for this
   * kind of codebase, plus the essential static analysis rules from Airbnb's base configuration.
   */
  extends: [
    'plugin:import/typescript', // For TypeScript imports
    'plugin:cypress/recommended',
    'plugin:jest-dom/recommended',
    'plugin:testing-library/react',
    'plugin:you-dont-need-lodash-underscore/compatible',
  ],

  plugins: [
    '@babel',
    'html',
    'jest',
    'jsdoc',
    'json',
    'prettier',
    'promise',
    'test-selectors',
    'sonarjs',
    'import', // Added for import rules
    'cypress',
    'mocha',
    'jest-dom',
    'testing-library',
    'you-dont-need-lodash-underscore',
    'deprecate',
  ],

  env: {
    browser: true,
    es2021: true,
    jquery: true,
    node: true,
    jest: true,
  },

  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    requireConfigFile: false,
  },
  globals: {
    browser: true,
  },

  // Explicitly setting the React version avoids a giant warning at the beginning of the report.
  settings: {
    react: {
      version: '1',
    },
    // Import settings from airbnb-base
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.json'],
      },
    },
    'import/extensions': ['.js', '.mjs', '.jsx'],
    'import/core-modules': [],
    'import/ignore': ['node_modules', '\\.(coffee|scss|css|less|hbs|svg|json)$'],
  },

  /*
   * AIRBNB-BASE IMPORT RULES (inlined from eslint-config-airbnb-base)
   */
  rules: {
    // Import rules from airbnb-base/rules/imports.js
    'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],
    'import/named': 'error',
    'import/default': 'off',
    'import/namespace': 'off',
    'import/export': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-deprecated': 'error', // Not enabled by default - using deprecated APIs should be an error
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'test/**',
          'tests/**',
          'spec/**',
          '**/__tests__/**',
          '**/__mocks__/**',
          'test.{js,jsx}',
          'test-*.{js,jsx}',
          '**/*{.,_}{test,spec}.{js,jsx}',
          '**/jest.config.js',
          '**/jest.setup.js',
          '**/vue.config.js',
          '**/webpack.config.js',
          '**/webpack.config.*.js',
          '**/rollup.config.js',
          '**/rollup.config.*.js',
          '**/gulpfile.js',
          '**/gulpfile.*.js',
          '**/Gruntfile{,.js}',
          '**/protractor.conf.js',
          '**/protractor.conf.*.js',
          '**/karma.conf.js',
          '**/.eslintrc.js',
        ],
        optionalDependencies: false,
      },
    ],
    'import/no-mutable-exports': 'error',
    'import/no-commonjs': 'off',
    'import/no-amd': 'error',
    'import/no-nodejs-modules': 'off',
    'import/first': 'error',
    'import/imports-first': 'off',
    'import/no-duplicates': 'error',
    'import/no-namespace': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
      },
    ],
    'import/order': ['error', { groups: [['builtin', 'external', 'internal']] }],
    'import/newline-after-import': 'error',
    'import/prefer-default-export': 'error',
    'import/no-restricted-paths': 'off',
    'import/max-dependencies': ['off', { max: 10 }],
    'import/no-absolute-path': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-internal-modules': ['off', { allow: [] }],
    'import/unambiguous': 'off',
    'import/no-webpack-loader-syntax': 'error',
    'import/no-unassigned-import': 'off',
    'import/no-named-default': 'error',
    'import/no-anonymous-default-export': [
      'off',
      {
        allowArray: false,
        allowArrowFunction: false,
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowLiteral: false,
        allowObject: false,
      },
    ],
    'import/exports-last': 'off',
    'import/group-exports': 'off',
    'import/no-default-export': 'off',
    'import/no-named-export': 'off',
    'import/no-self-import': 'error',
    'import/no-cycle': ['error', { maxDepth: '∞' }],
    'import/no-useless-path-segments': ['error', { commonjs: true }],
    'import/dynamic-import-chunkname': [
      'off',
      {
        importFunctions: [],
        webpackChunknameFormat: '[0-9a-zA-Z-_/.]+',
      },
    ],
    'import/no-relative-parent-imports': 'off',
    'import/no-unused-modules': [
      'off',
      {
        ignoreExports: [],
        missingExports: true,
        unusedExports: true,
      },
    ],
    'import/no-import-module-exports': ['error', { exceptions: [] }],
    'import/no-relative-packages': 'error',

    // Core ESLint rules from airbnb-base (essential error-prevention rules)
    'for-direction': 'error',
    'getter-return': ['error', { allowImplicit: true }],
    'no-async-promise-executor': 'error',
    'no-await-in-loop': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': ['error', 'always'],
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-dupe-args': 'error',
    'no-dupe-else-if': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty-character-class': 'error',
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'error',
    'no-func-assign': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-obj-calls': 'error',
    'no-regex-spaces': 'error',
    'no-sparse-arrays': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'use-isnan': 'error',
    'valid-typeof': ['error', { requireStringLiterals: true }],

    // Best practices copied from airbnb-base
    'array-callback-return': ['error', { allowImplicit: true }],
    'block-scoped-var': 'error',
    complexity: ['warn', 30],
    'class-methods-use-this': ['error', { exceptMethods: [] }],
    'consistent-return': 'error',
    curly: ['error', 'multi-line'],
    'default-case': ['error', { commentPattern: '^no default$' }],
    'default-case-last': 'error',
    'default-param-last': 'error',
    'dot-notation': ['error', { allowKeywords: true }],
    'dot-location': ['error', 'property'],
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'grouped-accessor-pairs': 'error',
    'guard-for-in': 'error',
    'max-classes-per-file': ['error', 1],
    'no-alert': 'error', // Not enabled by default - alert() should not be used in production code
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-constructor-return': 'error',
    'no-else-return': ['error', { allowElseIf: false }],
    'no-empty-function': ['error', { allow: ['arrowFunctions', 'functions', 'methods'] }],
    'no-empty-pattern': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-global-assign': ['error', { exceptions: [] }],
    'no-implicit-coercion': ['off', { boolean: false, number: true, string: true, allow: [] }],
    'no-implied-eval': 'error',
    'no-iterator': 'error',
    'no-labels': ['error', { allowLoop: false, allowSwitch: false }],
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-multi-spaces': ['error', { ignoreEOLComments: false }],
    'no-multi-str': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-proto': 'error',
    'no-redeclare': 'error',
    'no-return-assign': ['error', 'always'],
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-assign': ['error', { props: true }],
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unused-expressions': ['error', { allowShortCircuit: false, allowTernary: false, allowTaggedTemplates: false }],
    'no-unused-labels': 'error',
    'no-useless-catch': 'error',
    'no-useless-concat': 'error',
    'no-useless-escape': 'error',
    'no-useless-return': 'error',
    'no-void': 'error',
    'no-with': 'error',
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
    'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
    radix: 'error',
    'vars-on-top': 'error',
    'wrap-iife': ['error', 'outside', { functionPrototypeMethods: false }],
    yoda: 'error',

    // ES6 rules from airbnb-base
    'arrow-body-style': ['error', 'as-needed', { requireReturnForObjectLiteral: false }],
    'arrow-parens': ['error', 'always'],
    'arrow-spacing': ['error', { before: true, after: true }],
    'constructor-super': 'error',
    'generator-star-spacing': ['error', { before: false, after: true }],
    'no-class-assign': 'error',
    'no-confusing-arrow': ['error', { allowParens: true }],
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-duplicate-imports': 'off', // replaced by import/no-duplicates
    'no-new-symbol': 'error',
    'no-this-before-super': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': ['error', { ignoreDestructuring: false, ignoreImport: false, ignoreExport: false }],
    'no-var': 'error',
    'object-shorthand': ['error', 'always', { ignoreConstructors: false, avoidQuotes: true }],
    'prefer-arrow-callback': ['error', { allowNamedFunctions: false, allowUnboundThis: true }],
    'prefer-const': ['error', { destructuring: 'any', ignoreReadBeforeAssign: true }],
    'prefer-destructuring': [
      'error',
      { VariableDeclarator: { array: false, object: true }, AssignmentExpression: { array: true, object: false } },
      { enforceForRenamedProperties: false },
    ],
    'prefer-numeric-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'require-yield': 'error',
    'rest-spread-spacing': ['error', 'never'],
    'sort-imports': [
      'off',
      {
        ignoreCase: false,
        ignoreDeclarationSort: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],
    'symbol-description': 'error',
    'template-curly-spacing': 'error',
    'yield-star-spacing': ['error', 'after'],

    // Variable rules from airbnb-base
    'no-delete-var': 'error',
    'no-label-var': 'error',
    'no-restricted-globals': 'off', // Disabled - confusing-browser-globals not available
    'no-shadow': 'error',
    'no-shadow-restricted-names': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
    'no-use-before-define': ['error', { functions: true, classes: true, variables: true }],

    /*
     * RULES OVERRIDES SECTION
     *
     * TODO:
     * 1. Re-enable prettier, prefer-const, and spaced-comment. Apply auto-fixes.
     * 2. Address further violations one at a time, and add explanations, if they should stay.
     * 3. Resolve all further violations, adding exceptions where necessary.
     * 4. Add a pre-commit hook to run linting, to keep things cleaner. Consider running tests, as well, since the current suite runs in less than 5 seconds.
     */
    // List of possible base rules: http://eslint.org/docs/rules/

    // INHERITED BASE RULES FROM @fs/eslint-config-frontier-react/es6
    'no-restricted-exports': 'off', // We need to be able to export default
    'no-console': ['warn', { allow: ['error', 'trace', 'time'] }],
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],
    'no-warning-comments': ['warn', { terms: ['FIXME', 'TODO', 'HACK'], location: 'anywhere' }],

    // Override airbnb-base rules that are too strict for our codebase
    'arrow-body-style': 'off', // Allow both styles
    'arrow-parens': 'off', // Allow both styles
    'object-shorthand': 'off', // Allow both styles
    'prefer-arrow-callback': 'off', // Allow both styles
    'prefer-const': 'off', // Allow both styles - we have many var/let usages
    'prefer-destructuring': 'off', // Allow both styles
    'prefer-template': 'off', // Allow both styles
    'no-unused-vars': 'warn', // Make it warning instead of error
    // 'no-shadow': 'off', // Removed - keeping the airbnb-base version
    'consistent-return': 'off', // Too strict for our patterns
    'default-case': 'off', // We override this already
    'dot-notation': 'off', // We override this already
    eqeqeq: 'off', // We override this already
    'new-cap': 'off', // Good for the future
    camelcase: 'off',
    'no-unused-expressions': 'off', // Disable for better @babel version
    '@babel/no-unused-expressions': ['warn', { allowShortCircuit: true }],
    'import/prefer-default-export': 'off',
    'import/extensions': ['error', 'ignorePackages', { js: 'never', jsx: 'never', ts: 'never', tsx: 'never' }],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/setupTests.[tj]s?(x)',
          '**/*.{cy,spec,stories,test}.[tj]s?(x)',
          '.storybook/**',
          '**/demo/**',
          '**/docs/**',
          '**/fixtures/**',
          'scripts/**',
          'cypress/**',
        ],
        includeTypes: true,
      },
    ],

    // INHERITED PRETTIER RULES FROM @fs/eslint-config-frontier-react/prettierSetup
    'prettier/prettier': ['warn', { printWidth: 120, singleQuote: true, semi: false, trailingComma: 'es5' }],

    // INHERITED RULES FROM @fs/eslint-config-tree
    'no-console': ['warn', { allow: ['warn', 'error', 'trace', 'time'] }], // Allow warn on top of what eslint-config-frontier-react allows

    // Promise plugin rules
    'promise/catch-or-return': ['error', { allowFinally: true }], // Default 'error' but with custom config to allow finally blocks
    'promise/no-nesting': 'error', // Promoted from default 'warn' - nested promises are serious maintainability issues
    'promise/no-promise-in-callback': 'error', // Promoted from default 'warn' - mixing patterns leads to bugs
    'promise/no-callback-in-promise': 'error', // Promoted from default 'warn' - mixing patterns leads to bugs
    'promise/no-return-in-finally': 'error', // Promoted from default 'warn' - can mask errors and cause unexpected behavior
    'promise/valid-params': 'error', // Promoted from default 'warn' - invalid Promise parameters cause runtime errors

    // SonarJS rules for cognitive complexity and code quality
    'sonarjs/cognitive-complexity': ['warn', 30], // If your component or service gets beyond this point, you should consider scoping functionality differently.
    'sonarjs/max-switch-cases': ['warn', 15], // Yes, reducers are complicated, but if you have this many states, you may need to rethink your architecture.
    'sonarjs/no-duplicate-string': ['warn', { threshold: 4 }], // Maintainability. The more individual instances you have of a string literal, the more likely you miss/misspell one when refactoring.
    'sonarjs/prefer-immediate-return': 'off', // Disabled. Violations can often be helpful by adhering to a consistent format

    // Test selectors configuration - We use `data-testid` instead of `data-test-id`, in order to match React Native and Testing Library
    'test-selectors/anchor': [
      'warn',
      'always',
      { ignoreDisabled: false, ignoreReadonly: false, testAttribute: 'data-testid' },
    ],
    'test-selectors/button': [
      'warn',
      'always',
      { ignoreDisabled: false, ignoreReadonly: false, testAttribute: 'data-testid' },
    ],
    'test-selectors/input': [
      'warn',
      'always',
      { ignoreDisabled: false, ignoreReadonly: false, testAttribute: 'data-testid' },
    ],
    'test-selectors/onChange': [
      'warn',
      'always',
      { ignoreDisabled: false, ignoreReadonly: false, testAttribute: 'data-testid' },
    ],
    'test-selectors/onClick': [
      'warn',
      'always',
      { ignoreDisabled: false, ignoreReadonly: false, testAttribute: 'data-testid' },
    ],
    'test-selectors/onKeyDown': [
      'warn',
      'always',
      { ignoreDisabled: false, ignoreReadonly: false, testAttribute: 'data-testid' },
    ],
    'test-selectors/onKeyUp': [
      'warn',
      'always',
      { ignoreDisabled: false, ignoreReadonly: false, testAttribute: 'data-testid' },
    ],
    'test-selectors/onSubmit': [
      'warn',
      'always',
      { ignoreDisabled: false, ignoreReadonly: false, testAttribute: 'data-testid' },
    ],

    // THESE NEED TO BE RE-ENABLED SOON, BECAUSE THEY REALLY HELP ENFORCE CODE CONSISTENCY, AND ARE AUTO-FIXABLE
    'import/extensions': 'off',

    /*
     * HIGH-PRIORITY SECTION:
     * (these should be fixed as soon as possible, as they likely represent code problems):
     */

    'import/no-extraneous-dependencies': 'off',
    'no-cond-assign': 'off',
    'no-shadow': 'off',
    'no-void': 'off',

    /*
     * MEDIUM-PRIORITY SECTION:
     */

    'consistent-return': ['warn', { treatUndefinedAsUnspecified: true }], // Allow functions to implicitly return undefined
    'func-names': 'off',
    'no-continue': 'off', // Better to put the following statements *inside* your conditional.
    'no-promise-executor-return': 'warn', // Often hard to read and understand, and prone to future errors.
    'no-unused-vars': 'warn', // These can indicate dead code.

    /*
     * LOW-PRIORITY SECTION:
     */

    'no-empty-function': 'off', // If this really needs to be a thing, add a comment inside or disable the rule for the file.
    'no-empty': 'off', // It would be cleaner to avoid leaving empty blocks around.
    'no-inner-declarations': 'off', // Easier readability.
    'no-lonely-if': 'off', // Still works, but confusing.
    'no-new': 'off', // The current violations don't seem bad, but this rule should be followed.
    'no-return-await': 'off', // Yes, but the code still works, even if redundant.
    'no-throw-literal': 'off', // Throw a new Error("TEXT"), instead.
    'no-underscore-dangle': 'off', // Good for the future.
    'no-useless-catch': 'off', // It would be better to do something useful.
    'no-useless-escape': 'off', // It still works, but can be harder to read.
    'operator-assignment': 'off', // Opinionated, but is auto-fixable.
    'prefer-object-spread': 'off', // Opinionated, but is auto-fixable.
    strict: 'off',

    // As nice as having functional JSDocs is, it is more important to have functional code, so focus on the higher-priority rules, first.
    'jsdoc/check-param-names': 'off',
    'jsdoc/check-tag-names': 'off',
    'jsdoc/check-types': 'off',
    'jsdoc/match-description': 'off',
    'jsdoc/require-description': 'off',
    'jsdoc/require-hyphen-before-param-description': 'off',
    'jsdoc/require-param-description': 'off',
    'jsdoc/require-param-type': 'off',
    'jsdoc/require-param': 'off',
    'jsdoc/require-returns-description': 'off',
    'jsdoc/require-returns-type': 'off',
    'jsdoc/require-returns': 'off',
    'jsdoc/valid-types': 'off',

    // Jest plugin rules
    'jest/expect-expect': 'off', // It is better to have explicit expect statements, as they are easier to grok, and provide cleaner failure messaging. And THEN we will be able to see tests with no actual assertions.
    'jest/no-done-callback': 'off', // Easier to read and handle.

    /*
     * PERMANENT OVERRIDES:
     */

    '@babel/no-unused-expressions': 'off', // This just seems to trigger in test files on mocha assertions, and setting stuff in the env isn't quite working, yet.
    'no-await-in-loop': 'off', // We know it causes delays. We want it to. Hopefully.
    'no-console': 'off', // Node scripts use the console.
    'no-path-concat': 'off', // Deprecated rule, but still better to use node path module, instead.
    'no-useless-concat': 'off', // Ugly, but it works. Templates and/or += will be easier to read.
    radix: 'off', // No one ever has cared about adding base-10 designators everywhere.
    'sonarjs/cognitive-complexity': ['warn', 15], // Match SonarQube default (was 50) - temporarily warn instead of error
    'sonarjs/no-duplicate-string': 'off', // Almost all reduce readability in this codebase, and increase cognitive complexity.
    'sonarjs/prefer-immediate-return': 'error', // Prefer immediate returns (re-enabled from base config which has this disabled)

    // Custom rules (replacing @fs/eslint-plugin-zion and eslint-plugin-bestpractices)
    // Note: These are implemented in lib/eslint-rules/ but require a plugin loader to be used
    // For now, we'll add them as comments until we implement a proper plugin loader
    // 'logical-over-directional': 'warn',
    // 'no-eslint-disable': 'warn',

    // Deprecation rules
    // 'deprecate/function': 'off', // Configure as needed for specific deprecated functions
    // 'deprecate/import': 'off', // Configure as needed for specific deprecated imports
    // 'deprecate/member-expression': 'off', // Configure as needed for specific deprecated member expressions

    // You-dont-need-lodash-underscore rules (most disabled as they were in the original config)
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
  },

  overrides: [
    // JSON files override
    {
      files: ['*.json'],
    },

    // TypeScript overrides
    {
      files: ['*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      parserOptions: { warnOnUnsupportedTypeScriptVersion: false },
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: {
        'no-use-before-define': 'off', // @typescript-eslint/no-use-before-defined requires this to be off
        '@typescript-eslint/no-use-before-define': ['error', { functions: false }],
        '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }],
        'no-shadow': 'off', // @typescript-eslint/no-shadow requires this to be off
        '@typescript-eslint/no-shadow': 'error',
        '@typescript-eslint/consistent-type-definitions': 'off',
      },
    },
    {
      // Test files and development files get relaxed rules
      files: [
        '*.stories.*',
        '*test*',
        '**/test/**',
        '**/*test*/**',
        '*mock*',
        '**/setupTests.*',
        '**/fixtures/**',
        '**/*.cy.*',
      ],
      rules: {
        'no-alert': 'off',
        'no-console': 'off',
        'sonarjs/cognitive-complexity': ['warn', 50],
        'sonarjs/no-duplicate-string': 'off',
        'sonarjs/no-identical-functions': 'off',
        'test-selectors/anchor': 'off',
        'test-selectors/button': 'off',
        'test-selectors/input': 'off',
        'test-selectors/onChange': 'off',
        'test-selectors/onClick': 'off',
        'test-selectors/onKeyDown': 'off',
        'test-selectors/onKeyUp': 'off',
        'test-selectors/onSubmit': 'off',
        'import/prefer-default-export': 'off',
        'promise/catch-or-return': 'off',
      },
    },
    {
      // QA-specific overrides for test files
      files: ['test/**/*.js'],
      globals: {
        browser: 'readonly',
        $: 'readonly',
        $$: 'readonly',
        element: 'readonly',
        by: 'readonly',
        after: 'readonly',
      },
      rules: {
        'global-require': 'off',
        'no-console': 'off',
        'object-shorthand': 'off',
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        '@babel/no-unused-expressions': 'off', // to allow expressions like this: tree.expect(await (await $(tree.MBTpageObjects.getBCButton())).isDisplayed()).to.be.true
        'func-names': 'off', // to allow for how WDIO does "it" functions: "it('Login', async function () {". We need "this" and we can keep "this" by using "unnamed async function"
      },
    },
    {
      // Cypress test files
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
      // Cypress config files
      files: ['cypress.config.*', 'nyc.config.*'],
      rules: {
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
      },
    },
    {
      // Jest test files
      files: ['*.test.[tj]s?(x)'],
      rules: {
        'jest/no-large-snapshots': 'error',
        'testing-library/no-debugging-utils': 'off',
        'testing-library/no-node-access': 'off', // This rule was enabled for new testing-library
        'jest/expect-expect': ['warn', { assertFunctionNames: ['expect', '*expect*'] }],
      },
    },
    {
      // Jest test files
      files: ['*.test.[tj]s?(x)'],
      rules: {
        'jest/no-large-snapshots': 'error',
        'testing-library/no-debugging-utils': 'off',
        'testing-library/no-node-access': 'off', // This rule was enabled for new testing-library
        'jest/expect-expect': ['warn', { assertFunctionNames: ['expect', '*expect*'] }],
      },
    },
  ],
}
