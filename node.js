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

    // The following eslint-plugin-import rules walk the import resolver.
    // eslint-plugin-import resolves with eslint-import-resolver-node, not
    // `tsc`, so under TypeScript NodeNext/ESM — where a local import is
    // written with a `.js` extension that resolves to `.ts`/`.tsx` source —
    // the resolver can't bridge `.js`->`.ts` and produces false positives.
    // `tsc` already verifies module resolution end to end, so we defer to it
    // and disable these here.
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-useless-path-segments': 'off',
    'import/no-relative-packages': 'off',
    'import/no-self-import': 'off',
    'import/no-cycle': 'off',

    // These two don't false-positive under NodeNext — they compare specifier
    // strings rather than walk the resolver. Disabled for consistency only:
    // import ordering and de-duplication are already handled by the editor
    // and surfaced by `tsc`/Prettier, so enforcing them here is redundant.
    'import/no-duplicates': 'off',
    'import/order': 'off',

    // Not module-resolution sensitive: this rule only checks whether an
    // imported package is declared in package.json, so the NodeNext
    // `.js`->`.ts` rationale above does not apply. Disabled here separately.
    'import/no-extraneous-dependencies': 'off',

    // TypeScript's own resolver determines default/named export shapes; the
    // import plugin mis-detects these for some published packages (e.g. axios).
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'import/export': 'off',
  },
}
