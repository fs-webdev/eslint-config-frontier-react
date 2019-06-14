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

## CodeClimate Usage

It is important to note that in order for CodeClimate to use this custom config, we have to work around their limitations a bit.

1.  Add a prepare section to your .codeclimate.yml that will download this eslint-config file. [Prepare Docs](https://docs.codeclimate.com/docs/configuring-the-prepare-step)
    - It should look like this
      ```yaml
      prepare:
        fetch:
          - url: 'https://raw.githubusercontent.com/fs-webdev/eslint-config-frontier-react/master/index.js'
            path: 'eslint-config-frontier-react.js'
      ```
    - If you also opt into the jsdoc plugin we provide, you'll also need to make a prepare statement for that file.
2.  Make a new eslintrc file for codeclimate to use (that way it can point to the `eslint-config-frontier-react.js` file that codeclimate will prepare in Step 1.)

    1.  Copy your existing local eslintrc file and rename the copy to `.codeclimate.eslintrc.js` (or .json or .yml if you are using those filetypes)
    2.  Change the `"extends": ["frontier"]` statement to point to the prepared file from Step 1. `"extends": ["./eslint-config-frontier-react.js"]`
        (only do this in `.codeclimate.eslintrc.js` file, not your normal eslintrc)
        - If you also opt into the jsdoc plugin we provide, you'll also need to add that downloaded file to the extends array

3.  Tweak your .codeclimate.yml eslint section to point to the .codeclimate.eslintrc file instead of your default local eslintrc file
    - Your plugin section in your .codeclimate.yml may be larger and more complicated, but the `config:` part should point to the new eslintrc file you made in step 2.
    ```yaml
    plugins:
      eslint:
        channel: eslint-4
        config: # <- This line and the line below it are the important lines to add/tweak
          config: .codeclimate.eslintrc.js # <- this line and the line above it are the important lines to add/tweak
          extensions:
            - .js
            - .html
        enabled: true
    ```
