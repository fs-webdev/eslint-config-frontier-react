//This file basically turns everything into warnings instead of errors,
//that way during development, create-react-apps wont freak out and break the build
module.exports = {
  plugins: ['only-warn'],
  extends: ['@fs/eslint-config-frontier-react'],
}
