/*!
 * (c) Towry Wang, http://towry.me
 * Mit License
 */

'use strict';

module.exports = DepsPlugin;
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
	var options = compiler.options;
	var noBail = false;

	if (!options.bail) {
		noBail = true;
	}

	if (noBail) {
		compiler.plugin('this-compilation', function (compilation) {
			compilation.plugin('additional-assets', function () {
				this.callback(compilation.fileDependencies || [], compiler.options);
				// We just want to get dependencies.
				process.exit(0);
			}.bind(this));
		}.bind(this));
	}

	compiler.plugin('emit', function (compilation, compileCallback) {
		this.callback(compilation.fileDependencies || [], compiler.options);
		compileCallback();
	}.bind(this));
}
