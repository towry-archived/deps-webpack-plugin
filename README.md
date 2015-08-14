# deps-webpack-plugin

A simple webpack plugin that expose the dependencies of entry file in Webpack.

## Install

Just run

```bash
npm install --save-dev deps-webpack-plugin
```

## Usage

Your `webpack.config.js` file:

```js
var depsWebpackPlugin = require('deps-webpack-plugin');

// only list the deps, don't do anything else.
var noBail = true;

module.exports = {
  entry: './entry.js',
  output: {
    filename: "bundle.js"
  },

  plugins: [
    new depsWebpackPlugin(function (deps) {
      // deps is an array of file name.
      console.log(deps);
    }, noBail );
  ]
}
```

## License

MIT
