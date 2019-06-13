# eslint-config-frontier

* A common ESLint configuration for frontier apps. The base is airbnb's config (a highly used and tested configuration).

## Usage

We have an eslint configuration setup for react projects. We HIGHLY recommend you utilize it whenever writing react.

1.  Run `npm install @fs/eslint-config-frontier-react --save-dev`
2.  Add `"extends": ["@fs/eslint-config-frontier-react"]` to your eslint config.

### Opt in for linting jsdoc rules

We have a configuration for jsdoc rules that you can use if your team decides they want to be more consistent with jsdocs

1. Add a new entry to the `extends` field of your eslint config.
    ```
    "extends": [
      "@fs/eslint-config-frontier-react",
      "@fs/eslint-config-frontier-react/jsdoc"
    ],
    ```
