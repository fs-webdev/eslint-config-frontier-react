module.exports = {
  extends: [
    './react',
    './es6',
    './json',
    './typescript',
    './jest',
    // './noFixRules',
    './dont-need-lodash',
    './prettierSetup', // Always have prettier last so it can override format rules in the extends before it
  ],
}
