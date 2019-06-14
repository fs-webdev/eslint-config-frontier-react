// THIS FILE IS AUTO-GENERATED. DO NOT MODIFY THIS FILE BY HAND
  module.exports = {
  "plugins": [
    "html",
    "json",
    "babel",
    "react-hooks",
    "jsdoc"
  ],
  "extends": [
    "airbnb",
    "plugin:prettier/recommended",
    "prettier/react",
    "plugin:jest/recommended"
  ],
  "rules": {
    "prettier/prettier": [
      "warn",
      {
        "printWidth": 100,
        "singleQuote": true,
        "trailingComma": "es5",
        "semi": false
      }
    ],
    "arrow-parens": [
      1,
      "as-needed"
    ],
    "no-console": "off",
    "no-param-reassign": "off",
    "no-plusplus": "off",
    "no-unused-expressions": [
      "warn",
      {
        "allowShortCircuit": true
      }
    ],
    "no-use-before-define": [
      "error",
      {
        "functions": false,
        "classes": true,
        "variables": true
      }
    ],
    "no-warning-comments": 1,
    "prefer-destructuring": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": [
          "**/*.stories.js",
          "**/*.test.js",
          "**/demo/**"
        ]
      }
    ],
    "jsx-a11y/label-has-for": 0,
    "jsx-a11y/label-has-associated-control": [
      2,
      {
        "assert": "either"
      }
    ],
    "react/prop-types": "off",
    "react/jsx-filename-extension": "off",
    "react/require-default-props": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "jest/no-large-snapshots": "error",
    "jsdoc/check-alignment": "warn",
    "jsdoc/check-examples": "warn",
    "jsdoc/check-indentation": "off",
    "jsdoc/check-param-names": "warn",
    "jsdoc/check-syntax": "warn",
    "jsdoc/check-tag-names": "warn",
    "jsdoc/check-types": "warn",
    "jsdoc/implements-on-classes": "warn",
    "jsdoc/match-description": "warn",
    "jsdoc/newline-after-description": "off",
    "jsdoc/no-types": "off",
    "jsdoc/no-undefined-types": "warn",
    "jsdoc/require-description-complete-sentence": "off",
    "jsdoc/require-description": "warn",
    "jsdoc/require-example": "off",
    "jsdoc/require-hyphen-before-param-description": "warn",
    "jsdoc/require-jsdoc": "warn",
    "jsdoc/require-param-description": "warn",
    "jsdoc/require-param-name": "warn",
    "jsdoc/require-param-type": "warn",
    "jsdoc/require-param": "warn",
    "jsdoc/require-returns-check": "warn",
    "jsdoc/require-returns-description": "warn",
    "jsdoc/require-returns-type": "warn",
    "jsdoc/require-returns": "warn",
    "jsdoc/valid-types": "warn"
  },
  "env": {
    "es6": true,
    "browser": true
  },
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "parser": "babel-eslint"
}