const fs = require('fs')
const path = require('path')

const index = require('./index')

// the order of these configs is important and defined by the order of index.js,
// also, in order for codeclimate to easily opt in to jsdoc, we add it here as well
const configsToCombine = [
  require('./es6'), // eslint-disable-line
  require('./react'), // eslint-disable-line
  require('./jest'), // eslint-disable-line
  require('./jsdoc'), // eslint-disable-line
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
  JSON.stringify(codeclimateConfig, null, 2)
)
