
var depsWebpackPlugin = require('../index.js');

module.exports = {
  entry: './entry.js',
  output: {
    filename: "bundle.js"
  },
  plugins: [
    new depsWebpackPlugin()
  ]
}
