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

#### Using the Self-Contained Shared Configuration

We also provide a completely self-contained configuration that doesn't depend on external packages like Airbnb. This gives you full control over ESLint updates without waiting for upstream dependencies.

```json
"extends": [
  "@fs/eslint-config-frontier-react/shared"
],

```

**Benefits of the shared config:**
- ✅ Independent ESLint updates (not blocked by Airbnb)
- ✅ Full control over all rules
- ✅ Additional quality and testing rules included
- ✅ Same rule coverage as the main config

**Trade-offs:**
- 📦 Larger bundle size (rules are inlined vs extended)
- 🔧 More peer dependencies to install

See the [shared configuration README](./shared/README.md) for detailed usage instructions.

## CodeClimate Usage (DEPRECATED)

### As of v11 of this repository, we no longer keep codeclimate compatability. [See this Architectural Decision why.](https://www.familysearch.org/frontier/docs/architectural-decisions/020-eslint-codeclimate-compatability)

### For People using v10 and before and still want eslint in codeclimate we left the following instructions

It is important to note that in order for CodeClimate to use this custom config, we have to work around their limitations a bit.

1. Add a prepare section to your .codeclimate.yml that will download this eslint-config file. [Prepare Docs](https://docs.codeclimate.com/docs/configuring-the-prepare-step)

- It should look like this

```yaml
prepare:
  fetch:
    - url: 'https://raw.githubusercontent.com/fs-webdev/eslint-config-frontier-react/master/codeclimateEslintRulesv10.js'
      path: 'eslint-config-frontier-react.js'

```

- If you also opt into the jsdoc plugin we provide, you'll also need to make a prepare statement for that file.

- WARNING: Starting in version 4 of this repo, there is a different codeclimateEslintRules file for every major version
   that is released. If you are using or upgrading to v8 of this repo, you'll need to change the fetched url file to
   `codeclimateEslintRulesv10.js`. Notice the "v10" at the end of the filename.

2. Make a new eslintrc file for codeclimate to use (that way it can point to the `eslint-config-frontier-react.js` file that codeclimate will prepare in Step 1.)

   1. Copy your existing local eslintrc file and rename the copy to `.codeclimate.eslintrc.js` (or .json or .yml if you are using those filetypes)
   2. Change the `"extends": ["frontier"]` statement to point to the prepared file from Step 1. `"extends": ["./eslint-config-frontier-react.js"]`
      (only do this in `.codeclimate.eslintrc.js` file, not your normal eslintrc)
      - If you also opt into the jsdoc plugin we provide, you'll also need to add that downloaded file to the extends array

3. Tweak your .codeclimate.yml eslint section to point to the .codeclimate.eslintrc file instead of your default local eslintrc file

- Your plugin section in your .codeclimate.yml may be larger and more complicated, but the `config:` part should point to the new eslintrc file you made in step 2.

```yaml
plugins:
  eslint:
    channel: eslint-5
    config: # <- This line and the line below it are the important lines to add/tweak
      config: .codeclimate.eslintrc.js # <- this line and the line above it are the important lines to add/tweak
      extensions:
        - .js
        - .html
    enabled: true

```
