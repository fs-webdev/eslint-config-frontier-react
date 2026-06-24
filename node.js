/*
 * Node.js environment configuration.
 *
 * The default config (and `react`) assume a browser environment. Backend
 * services and tooling that run on Node — for example the `arches` framework
 * and arches subgraph instances — need `node` globals (process, __dirname, …)
 * and run as TypeScript ESM with NodeNext module resolution, where local
 * imports carry a `.js` extension that maps to `.ts`/`.tsx` source.
 *
 * This config is purely additive: it changes nothing for existing consumers.
 * Compose it AFTER `es6` (and `typescript`, if your repo uses TS) and BEFORE
 * `prettierSetup` so Prettier still wins on formatting:
 *
 *   extends: [
 *     '@fs/eslint-config-frontier-react/es6',
 *     '@fs/eslint-config-frontier-react/typescript',
 *     '@fs/eslint-config-frontier-react/node',
 *     '@fs/eslint-config-frontier-react/prettierSetup',
 *   ]
 */
module.exports = {
  env: {
    node: true,
    es2022: true,
  },
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  rules: {
    // Node services and scripts log to the console intentionally.
    'no-console': 'off',

    // The following eslint-plugin-import rules are module-resolution
    // sensitive. Under TypeScript NodeNext/ESM — where a local import is
    // written with a `.js` extension that resolves to `.ts`/`.tsx` source —
    // the import resolver produces false positives. `tsc` already verifies
    // module resolution end to end, so we defer to it and disable these here.
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-useless-path-segments': 'off',
    'import/no-relative-packages': 'off',
    'import/no-self-import': 'off',
    'import/no-cycle': 'off',
    'import/no-duplicates': 'off',
    'import/order': 'off',
    'import/no-extraneous-dependencies': 'off',
    // TypeScript's own resolver determines default/named export shapes; the
    // import plugin mis-detects these for some published packages (e.g. axios).
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'import/export': 'off',
  },
}
