// THIS FILE IS AUTO-GENERATED. DO NOT MODIFY THIS FILE BY HAND
  module.exports = {
  "plugins": [
    "html",
    "json",
    "babel",
    "react-hooks"
  ],
  "extends": [
    "airbnb",
    "plugin:import/typescript",
    "prettier/react",
    "plugin:jest/recommended",
    "plugin:prettier/recommended"
  ],
  "rules": {
    "no-console": [
      "warn",
      {
        "allow": [
          "error",
          "trace",
          "time"
        ]
      }
    ],
    "no-param-reassign": "off",
    "no-plusplus": "off",
    "no-unused-expressions": "off",
    "babel/no-unused-expressions": [
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
    "prettier/prettier": [
      "warn",
      {
        "arrowParens": "always",
        "printWidth": 120,
        "semi": false,
        "singleQuote": true,
        "trailingComma": "es5"
      }
    ]
  },
  "env": {
    "es6": true,
    "browser": true
  },
  "parserOptions": {
    "ecmaVersion": 2020,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "parser": "babel-eslint"
}