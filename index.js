/*!
 * (c) Towry Wang, http://towry.me
 * Mit License
 */

'use strict';

var exports = module.exports = DepsPlugin;
var pkg = require('./package.json');


var err = '`' + pkg.name  + '` requires a callback';
/**
 * `deps-webpack-plugin` will gathering information
 * about the files that being required.
 */
function DepsPlugin (callback) {
  if (!callback || typeof callback !== 'function') {
    throw new Error(err);
  }

  this.callback = callback;
}


DepsPlugin.prototype.apply = function (compiler) {
  compiler.plugin('emit', function (compilation, compileCallback) {
    var deps = compilation.fileDependencies;
    this.callback(deps);
    compileCallback();
  }.bind(this));
}
