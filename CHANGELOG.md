# 9.0.0 - Oct 13th 2021

TURN BACK ON the new preferZionRender rule from @fs/eslint-plugin-zion because it is a breaking change, should be in 9.0.0

# 8.4.0 - Oct 13th 2021

TURN OFF the new preferZionRender rule from @fs/eslint-plugin-zion because it is a breaking change, should be in 9.0.0

# 8.3.0 - Oct 12th 2021

Utilize the new preferZionRender rule from @fs/eslint-plugin-zion

# 8.2.0 - Aug 30th 2021

Undo basically all of the dep updates that occurred in 8.0.0

# 8.2.0-alpha.2 - Aug 30th 2021

Trying to get other deps to be in sync with codeclimate's deps for eslint-7

# 8.2.0-alpha.1 - Aug 30th 2021

Downgrading eslint-config-prettier to v6, since codeclimate is still stuck on v6. Now there shouldn't be a discrepency
between codeclimate and local linting

# 8.2.0-alpha.0 - Aug 30th 2021

Adding back prettier/react in the react.js file to see if it makes codeclimate happy with local linting

# 8.0.0 - July 6th 2021

Updated to v8 of eslint-config-prettier and made the necessary changes for that.


# 8.0.0-alpha.3 - June 23rd 2021

Turning off the camelcase rule. Our convention with Split.io split names combines camelcase and underscores, and the easiest thing to do
is just turn this style rule off.


# 8.0.0-alpha.0 - April 12th 2021

Updated dependency versions and removed lenient.js. Going to v8 basically requires you to go to @fs/react-scripts v6 (unless you 
are okay with webpackDevServer failing on eslint errors)

## Breaking - removed lenient.js
In @fs/react-scripts v6, we merged in changed from upstream master branch that includes a "failOnError" option in the webpack config.
Instead of needing lenient.js and a 3rd party tool, we can just set that failOnError: false.
