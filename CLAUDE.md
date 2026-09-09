# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A shared ESLint config package (`@fs/eslint-config-frontier-react`) consumed by FamilySearch frontier apps. `npm test` does not run unit tests — it resolves every shareable config (see below). CI runs on GitHub Actions (`.github/workflows/ci.yml`) and auto-publishes to the FamilySearch Artifactory npm registry on push to `master`.

## CI and validation

`.github/workflows/ci.yml` is a single `ci` job. PRs run `npm install` → `npm run lint` → `npm test`; pushes to `master` run those and then `npm run publish`.

`npm test` runs `scripts/validateConfigs.js` and is the only real check in the repo — there are no unit tests. It runs `eslint --print-config` against every top-level `*.js` config, which makes ESLint fully resolve each one the way a consuming app does — catching unresolvable `extends`, unknown plugins, and typo'd rule names. It also fails a config that resolves to zero rules. Two details it handles that are easy to break:

- It symlinks the package into its own `node_modules/@fs/`, because `index.js` extends its siblings by package name (`@fs/eslint-config-frontier-react/react`), which otherwise only resolves downstream.
- Override-only configs (`json.js` → `*.json`, `typescript.js` → `*.ts?(x)`, `esx.js` via `src/**` in `index.js`) are resolved against several target paths, since a single `.js` path would report them as empty.

Notes on the workflow itself: `npm install`, not `npm ci`, and no `cache: npm` — `package-lock.json` is gitignored here, and setup-node's npm cache hard-fails without a lockfile. `scope: '@fs'` on setup-node reproduces the `@fs:registry=` line Travis hand-wrote.

## Publishing

Pushing to `master` triggers the workflow's `Publish` step, which runs `npm run publish` (`npmPublish` from `@fs/npm-publisher`) authenticated with `secrets.NPM_PUBLISH_TOKEN`. Bump the version in `package.json` and add a CHANGELOG entry before merging.

This package requires Node 24: `engines.node` is `>=24` and `.nvmrc` is `24`. Node 24 is a company mandate, and it's also a real floor here — `eslint-plugin-jsdoc` uses the `v` regex flag, so `jsdoc.js` and `noFixRules.js` cannot load below Node 20 at all. Keep `.nvmrc` and `engines.node` in step if either moves.

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

**Key constraint:** `prettierSetup` must always be the last entry in `extends` so it can override formatting rules from all other configs.

**TypeScript constraint:** `typescript.js` is not included in the default `index.js` because `@typescript-eslint` requires TypeScript to be installed in the consuming project. Consumers add it explicitly.

**`esx.js` placement:** Applied only to `src/**` (not test/config files) via the `overrides` in `index.js`, since it restricts to ES2022 and test/build tooling often uses newer syntax.

## Dependency model

Runtime `dependencies` are bundled (babel parser, typescript-eslint parser, airbnb config, prettier). ESLint plugins that consumers already have are `peerDependencies` — this avoids version conflicts when consumers bring their own plugin versions.
