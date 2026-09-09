# eslint-config-frontier-react

- A common ESLint configuration for frontier apps. The base is airbnb's config (a highly used and tested configuration).

## Usage

We have an eslint configuration setup for react projects. We HIGHLY recommend you utilize it whenever writing react.

1. Run `npm install @fs/eslint-config-frontier-react --save-dev`
2. Add `"extends": ["@fs/eslint-config-frontier-react"]` to your eslint config.

### Opt in for only specific/additional configurations

You may want to only use a subset of the configurations here in this eslint repo. If you add additional configs, remember that prettierSetup needs to be the last extend so that any formatting rules can be overrided properly (see <https://github.com/prettier/eslint-config-prettier#installation> for which plugins prettier turns some rules off for).

#### If your repo doesn't use react

This is how you can use just the es6 rules and prettier and not have to worry about react rules in a non-react repo

```json
"extends": [
  "@fs/eslint-config-frontier-react/es6",
  "@fs/eslint-config-frontier-react/prettierSetup"
],
```

#### If your repo runs on Node

The default config and the `react` config assume a browser environment. For backend services and tooling that run on Node (and typically as TypeScript ESM with NodeNext module resolution), add the `node` config. It provides the `node` env, turns off `no-console` (Node services log intentionally), and disables a set of `eslint-plugin-import` rules — both resolution-sensitive rules that false-positive under NodeNext (where `tsc` verifies resolution) and a few ordering/de-dup and export-shape rules the plugin mis-detects. Compose it after `es6`/`typescript` and before `prettierSetup`:

```json
"extends": [
  "@fs/eslint-config-frontier-react/es6",
  "@fs/eslint-config-frontier-react/typescript",
  "@fs/eslint-config-frontier-react/node",
  "@fs/eslint-config-frontier-react/prettierSetup"
],
```

#### Adding typescript eslint rules

We have a configuration for typescript rules that you can use if your repo uses typescript.
It doesn't come out of the box with @fs/eslint-config-frontier-react, so you'll need to add it explicitly.
Also, it requires that `typescript >=3` be installed in your repo as well. prettierSetup needs to be added at the end to override some of the TypeScript rules properly.

```json
"extends": [
  "@fs/eslint-config-frontier-react",
  "@fs/eslint-config-frontier-react/typescript",
  "@fs/eslint-config-frontier-react/prettierSetup"
],
```

#### Adding jsdoc eslint rules

We have a configuration for jsdoc rules that you can use if your team decides they want to be more consistent with jsdocs
It doesn't come out of the box with @fs/eslint-config-frontier-react, so you'll need to add it explicitly

1. Add a new entry to the `extends` field of your eslint config.

```json
"extends": [
  "@fs/eslint-config-frontier-react",
  "@fs/eslint-config-frontier-react/jsdoc"
],
```

## Development

There is no unit test suite. CI (`.github/workflows/ci.yml`) runs two checks on every PR, and
both are worth running locally before you push:

```sh
npm run lint             # eslint over this repo's own files
npm run validate:configs # asks eslint to fully resolve every shareable config in the repo
```

`validate:configs` is the one that matters. It runs `eslint --print-config` against every config
file here, which forces ESLint to do the same resolution work a consuming app does before it lints
anything -- so a typo'd rule name, an `extends` that no longer resolves, or a plugin missing from
`peerDependencies` fails the PR instead of shipping to consumers.

Merging to `master` publishes the version in `package.json` to Artifactory, so bump the version and
add a CHANGELOG entry in your PR.

## CodeClimate Usage (REMOVED)

### As of v11 of this repository, we no longer keep codeclimate compatability. [See this Architectural Decision why.](https://www.familysearch.org/frontier/docs/architectural-decisions/020-eslint-codeclimate-compatability)

The `codeclimateEslintRules*.js` files, and the instructions for wiring them into a
codeclimate `prepare` step, were removed in v11.7.0. Nothing on `master` generates or
consumes them anymore.

If you are still on v10 or earlier and depend on those files, pin your `prepare` fetch to the
last commit that had them (`f89188c`) instead of `master`:

```yaml
prepare:
  fetch:
    - url: 'https://raw.githubusercontent.com/fs-webdev/eslint-config-frontier-react/f89188c/codeclimateEslintRulesv10.js'
      path: 'eslint-config-frontier-react.js'
```
