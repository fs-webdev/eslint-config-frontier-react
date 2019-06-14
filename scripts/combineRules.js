const fs = require('fs')
const path = require('path')

const index = require('../index')

// the order of these configs is important and defined by the order of index.js,
// jsdoc is opt-in, and to get that in codeclimate, they'll need to use a prepare statement for the
// jsdoc.js file as well, we won't do that automatically here
const configsToCombine = [
  require('../es6'), // eslint-disable-line
  require('../react'), // eslint-disable-line
  require('../jest'), // eslint-disable-line
]

const codeclimateConfig = {
  plugins: index.plugins,
  extends: [],
  rules: {},
  env: {},
  parserOptions: {},
}

configsToCombine.forEach(config => {
  // the parser set will be the first parser that is encountered, in our case, the parser defined in es6.js
  codeclimateConfig.parser = codeclimateConfig.parser || config.parser
  codeclimateConfig.plugins.push(...(config.plugins || []))
  codeclimateConfig.extends.push(...(config.extends || []))
  codeclimateConfig.env = { ...codeclimateConfig.env, ...(config.env || {}) }
  codeclimateConfig.parserOptions = {
    ...codeclimateConfig.parserOptions,
    ...(config.parserOptions || {}),
  }
  codeclimateConfig.rules = { ...codeclimateConfig.rules, ...(config.rules || {}) }
})

fs.writeFileSync(
  path.join(process.cwd(), 'codeclimateEslintRules.js'),
  `// THIS FILE IS AUTO-GENERATED. DO NOT MODIFY THIS FILE BY HAND
  module.exports = ${JSON.stringify(codeclimateConfig, null, 2)}`
)
