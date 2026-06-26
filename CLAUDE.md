# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A shared ESLint config package (`@fs/eslint-config-frontier-react`) consumed by FamilySearch frontier apps. It has no test suite — changes are validated by publishing and consuming in downstream repos. CI runs on Travis and auto-publishes to the FamilySearch Artifactory npm registry on merge to `master`.

## Publishing

Merging to `master` triggers Travis CI, which runs `npm run publish` (`npmPublish` from `@fs/npm-publisher`). Bump the version in `package.json` and add a CHANGELOG entry before merging.

## Config file architecture

Each file is a standalone shareable ESLint config that can be composed independently:

| File | Purpose |
|---|---|
| `index.js` | Default export — composes react + es6 + json + jest + cypress + dont-need-lodash + prettierSetup. Applies `esx` only to `src/**`. |
| `react.js` | Extends airbnb (with JSX), adds react-hooks plugin rules |
| `es6.js` | Extends airbnb-base + import/typescript, uses `@babel/eslint-parser` |
| `typescript.js` | Overrides for `*.ts?(x)` files only — applied on top of the base config, not standalone |
| `esx.js` | Restricts to ES2022 syntax via `eslint-plugin-es-x` — applied as an override to `src/**` in index.js |
| `jest.js` | Jest + jest-dom + testing-library rules |
| `cypress.js` | Cypress + mocha rules |
| `jsdoc.js` | Optional; consumers opt in explicitly |
| `prettierSetup.js` | Always last in extends — overrides formatting rules from everything before it |
| `prettierConfig.js` | Prettier rule values imported by prettierSetup.js |
| `noFixRules.js` | Uses `eslint-plugin-no-autofix` to make `prefer-const` non-auto-fixable |
| `dont-need-lodash.js` | `eslint-plugin-you-dont-need-lodash-underscore` rules |
| `json.js` | JSON file linting |
| `codeclimateEslintRules*.js` | Deprecated — kept for consumers on v10 and below |

**Key constraint:** `prettierSetup` must always be the last entry in `extends` so it can override formatting rules from all other configs.

**TypeScript constraint:** `typescript.js` is not included in the default `index.js` because `@typescript-eslint` requires TypeScript to be installed in the consuming project. Consumers add it explicitly.

**`esx.js` placement:** Applied only to `src/**` (not test/config files) via the `overrides` in `index.js`, since it restricts to ES2022 and test/build tooling often uses newer syntax.

## Dependency model

Runtime `dependencies` are bundled (babel parser, typescript-eslint parser, airbnb config, prettier). ESLint plugins that consumers already have are `peerDependencies` — this avoids version conflicts when consumers bring their own plugin versions.
