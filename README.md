# eslint-config-frontier-react

- A common ESLint configuration for frontier apps. The base is airbnb's config (a highly used and tested configuration).

## Usage

We have an eslint configuration setup for react projects. We HIGHLY recommend you utilize it whenever writing react.

1. Run `npm install @fs/eslint-config-frontier-react --save-dev`
2. Add `"extends": ["@fs/eslint-config-frontier-react"]` to your eslint config.
3. If you use TypeScript add your tsconfig to your parserOptions like so `"overrides": [ { "files": ["*.ts?(x)"], "parserOptions": { "project": "./tsconfig.json" } } ]`

### Opt in for linting jsdoc rules

We have a configuration for jsdoc rules that you can use if your team decides they want to be more consistent with jsdocs

1. Add a new entry to the `extends` field of your eslint config.

```json
"extends": [ "@fs/eslint-config-frontier-react", "@fs/eslint-config-frontier-react/jsdoc" ],
```

## CodeClimate Usage

CodeClimate uses its own dependencies, so its rules are a bit behind.

1. Add a prepare section to your .codeclimate.yml that will download this eslint-config file. [Prepare Docs](https://docs.codeclimate.com/docs/configuring-the-prepare-step)

   - It should look like this

     ```yaml
     prepare:
       fetch:
         - url: 'https://raw.githubusercontent.com/fs-webdev/eslint-config-frontier-react/master/codeclimateEslintRulesv11.js'
           path: 'eslint-config-frontier-react.js'
     ```

   - WARNING: Starting in version 4 of this repo, there is a different codeclimateEslintRules file for every major version
     that is released. Please use the latest rules version.
   - We are not supporting different configurations of the CodeClimate rules at this time, but you may try adding extra rules.

2. Make a new eslintrc file for CodeClimate to use (that way it can point to the `eslint-config-frontier-react.js` file that codeclimate will prepare in Step 1.)

   1. Add the `.codeclimate.eslintrc.js` with the `extends: ['./eslint-config-frontier-react.js']`

3. Tweak your .codeclimate.yml eslint section to point to the .codeclimate.eslintrc file instead of your default local eslintrc file

   - Your plugin section in your .codeclimate.yml may be larger and more complicated, but the `config:` part should point to the new eslintrc file you made in step 2.

     ```yaml
     plugins:
       eslint:
         channel: eslint-8 # Use the right channel; v11 supports eslint-8
         config: # <- This line and the line below it are the important lines to add/tweak
          config: .codeclimate.eslintrc.js # <- this line and the line above it are the important lines to add/tweak
           extensions:
             - .js
              - .ts # if your project uses typescript
              - .tsx # if your project uses typescript
              - .json
              - .html
          enabled: true
     ```

4. Don't CodeClimate-lint your test files

```yaml
exclude_patterns:
  - '**/setupTests.*'
  - '**/*.test.*'
  - '**/*.spec.*'
```
