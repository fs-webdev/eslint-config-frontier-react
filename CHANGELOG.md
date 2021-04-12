# 8.0.0-alpha.0 - April 12th 2021

Updated dependency versions and removed lenient.js. Going to v8 basically requires you to go to @fs/react-scripts v6 (unless you 
are okay with webpackDevServer failing on eslint errors)

## Breaking - removed lenient.js
In @fs/react-scripts v6, we merged in changed from upstream master branch that includes a "failOnError" option in the webpack config.
Instead of needing lenient.js and a 3rd party tool, we can just set that failOnError: false.
