"use strict";

/*
 * Webpack configuration file - 04/Dec/2017
 * @author  Áquila Freitas
 * @todo: support html and css build
 */

const 	App = require("./package.json"),

		// Webpack specific
		publicPROD = require("path").resolve(__dirname, "../public/js/"),	// Location of the production file
	  	publicDEV = "/public/js/",	  										// Location of the dev file virtually bundled

	  	// Plugins
		CleanWebpack = require("clean-webpack-plugin"); 					// Empties the public js folder


module.exports = {
	entry: App.config.source + "/js/" + App.config.filename,
	output: {
		filename: App.config.filename,
		path: publicPROD,
		publicPath: publicDEV
	},

	// Development - Webpack Router: http://localhost:9000/webpack-dev-server
	devtool: "inline-source-map",
	devServer: {
		contentBase: App.config.source,
		port: App.config.port
	},

	// Plugins
	plugins: [
		new CleanWebpack([publicPROD + "/*.js"], {	verbose: true,
											allowExternal: true	})
	]
};
