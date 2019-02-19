# eslint-config-frontier

* A common ESLint configuration for frontier apps. The base is airbnb's config (a highly used and tested configuration).

## Usage

We have an eslint configuration setup for react projects. We HIGHLY recommend you utilize it whenever writing react.

1.  Run `npm install fs-webdev/eslint-config-frontier --save-dev`
2.  Add `"extends": ["frontier/recommended"]` to your eslint config.

## Old/Deprecated Usage

1.  Run `npm install fs-webdev/eslint-config-frontier --save-dev`
2.  Add `"extends": ["frontier"]` to your eslint config.

### Extended Config Details

#### es6
The es6 config uses airbnb as a base rule config, and adds prettier/recommended rules on top of it. This also utilizes babel-eslint as the parser
so eslint will be able to recognize some newer features like objectDestructuring

#### react
The react config is very basic. It uses the react plugin and extends prettier/react rules.
Also turns on jsx and experimentalObjectRestSpread parserOptions

## CodeClimate Usage

It is important to note that in order for CodeClimate to use this custom config, we have to work around their limitations a bit.

1.  Add a prepare section to your .codeclimate.yml that will download this eslint-config file. [Prepare Docs](https://docs.codeclimate.com/docs/configuring-the-prepare-step)
    * It should look like this
      ```yaml
      prepare:
        fetch:
          - url: "https://raw.githubusercontent.com/fs-webdev/eslint-config-frontier/master/index.js"
            path: "eslint-config-frontier.js"
      ```
2.  Make a new eslintrc file for codeclimate to use (that way it can point to the `eslint-config-frontier.js` file that codeclimate will prepare in Step 1.)

    1.  Copy your existing local eslintrc file and rename the copy to `.codeclimate.eslintrc.js` (or .json or .yml if you are using those filetypes)
    2.  Change the `"extends": ["frontier"]` statement to point to the prepared file from Step 1. `"extends": ["./eslint-config-frontier.js"]`
        (only do this in `.codeclimate.eslintrc.js` file, not your normal eslintrc)

3.  Tweak your .codeclimate.yml eslint section to point to the .codeclimate.eslintrc file instead of your default local eslintrc file
    * Your plugin section in your .codeclimate.yml may be larger and more complicated, but the `config:` part should point to the new eslintrc file you made in step 2.
    ```yaml
    plugins:
      eslint:
        channel: eslint-4
        config:                              # <- This line and the line below it are the important lines to add/tweak
          config: .codeclimate.eslintrc.js   # <- this line and the line above it are the important lines to add/tweak
          extensions:
            - .js
            - .html
        enabled: true
    ```
