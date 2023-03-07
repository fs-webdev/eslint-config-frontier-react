# CHANGELOG

## 11.0.0-alpha.7 - Mar 7 2023

- Update JSDoc rules
- Update JSON plugin to be used for json files. This also make the default linting experience actually lint json files without specifying any extensions. See <https://eslint.org/docs/latest/use/command-line-interface#--ext>.

## 11.0.0-alpha.6 - Mar 1 2023

- Disable no-restricted-exports because we need to be able to export default

## 11.0.0-alpha.5 - Feb 27 2023

- Typescript rules update:
  - All the rules from @typescript-eslint/recommended already turn off the overriden rules, so no-unused-vars and no-empty-functions do not need to be explicitly turned off in our config
  - Added @typescript-eslint/no-shadow because we have the normal rule for JS files as error.

## 11.0.0-alpha.4 - Jan 24 2023

- Don't turn import/extensions off for TS files
- Adds json rules
- Updates rules
  - no-warning-comments - looks for todo, fixme, or hack anywhere in the comment now rather than the default of todo, fixme, xxx at the start of a comment
  - import/no-extraneous-dependencies - Looks at TS files now too and the setupTests file
  - jest/expect-expect - relaxes it a bit
  - react/no-unknown-property - turned off
  - @typescript-eslint/no-use-before-define - from off to error but does not check functions because functions are hoisted so it is safe
  - @typescript-eslint/no-empty-function - as error except for arrow functions to allow for empty functions when mocking functions or making them the default for a provider.
  - @typescript-eslint/consistent-type-imports - error instead of warn; this separates type and non-type imports and it is automatically fixable.
  - @typescript-eslint/no-non-null-assertion - turns off in test files because we can know for sure if something is null or not for tests because we made the mock data

## 11.0.0-alpha.3 - Jan 20 2023

- Allow node 14+ in engines so repos stuck on 14 don't get a warning about it
- Explicitly add eslint-plugin-jsx-a11y dep since it is a peerDep in airbnb

## 11.0.0-alpha.2 - Jan 20 2023

- Don't include typescript lint rules by default. Apps need to opt in
- Update readme to show how to opt into typescript
- Remove peerDep on typescript since that isn't technically true all the time

## 11.0.0-alpha.1 - Jan 20 2023

- Remove 'prettier' from end of each extends from individual configs

## 11.0.0-alpha.0 - Jan 20 2023

- Remove codeclimate limitations, update deps

## 10.0.0 - Jan 11 2023

- Just get off alpha since things are working as expected

## 10.0.0-alpha.2 - Sep 12 2022

- enable node 16 "everywhere" in repo
- ignore certain properties in "react/no-unknown-property" rule
- turn off testing-library/no-debugging-utils

## 10.0.0-alpha.1 - Jul 15th 2022

- turn of no-autofix since it breaks cra 5

## 10.0.0-alpha.0 - Jul 7th 2022

Remove eslint from devDependencies, and lower the peerDep of eslint so it works with airbnb 17.1.0.
and we need to be on airbnb 17.1.0 because of codeclimate constraints

## 9.0.0 - Oct 13th 2021

TURN BACK ON the new preferZionRender rule from @fs/eslint-plugin-zion because it is a breaking change, should be in 9.0.0

## 8.4.0 - Oct 13th 2021

TURN OFF the new preferZionRender rule from @fs/eslint-plugin-zion because it is a breaking change, should be in 9.0.0

## 8.3.0 - Oct 12th 2021

Utilize the new preferZionRender rule from @fs/eslint-plugin-zion

## 8.2.0 - Aug 30th 2021

Undo basically all of the dep updates that occurred in 8.0.0

## 8.2.0-alpha.2 - Aug 30th 2021

Trying to get other deps to be in sync with codeclimate's deps for eslint-7

## 8.2.0-alpha.1 - Aug 30th 2021

Downgrading eslint-config-prettier to v6, since codeclimate is still stuck on v6. Now there shouldn't be a discrepency
between codeclimate and local linting

## 8.2.0-alpha.0 - Aug 30th 2021

Adding back prettier/react in the react.js file to see if it makes codeclimate happy with local linting

## 8.0.0 - July 6th 2021

Updated to v8 of eslint-config-prettier and made the necessary changes for that.

## 8.0.0-alpha.3 - June 23rd 2021

Turning off the camelcase rule. Our convention with Split.io split names combines camelcase and underscores, and the easiest thing to do
is just turn this style rule off.

## 8.0.0-alpha.0 - April 12th 2021

Updated dependency versions and removed lenient.js. Going to v8 basically requires you to go to @fs/react-scripts v6 (unless you
are okay with webpackDevServer failing on eslint errors)

### Breaking - removed lenient.js

In @fs/react-scripts v6, we merged in changed from upstream master branch that includes a "failOnError" option in the webpack config.
Instead of needing lenient.js and a 3rd party tool, we can just set that failOnError: false.
