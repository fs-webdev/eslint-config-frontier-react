module.exports = {
  plugins: ['react-hooks'],
  extends: ['airbnb'],
  env: {
    browser: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
  rules: {
    'react/prop-types': 'off',
    'react/jsx-filename-extension': 'off',
    'react/require-default-props': 'off',
    'react/no-unknown-property': 'off', // Allows custom properties to be used for css (is-desktop, etc) and for parents (columns, growX, etc)
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': ['warn', {
      additionalHooks: '(useEvent|useSyncedRef|useMountedRef)', // very stable hooks from frontend-friends
    }],
    'react/function-component-definition': 'off', // TODO look into this more
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-no-bind': [
      'error',
      {
        ignoreRefs: true,
        allowArrowFunctions: true,
        allowFunctions: true, // 2024-06-05: We decided that it is fine to allowFunctions as there doesn't seem to be benefits for it
        allowBind: false,
        ignoreDOMComponents: true,
      },
    ],
    'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],

    // Overrides airbnb's rule
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        assert: 'either', // fs-styles does not support nesting currently
      },
    ],
  },
}
