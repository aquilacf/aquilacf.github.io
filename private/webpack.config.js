
"use strict";

/**
 * Webpack configuration file - 04/Dec/2017
 * @author  Áquila Freitas <aquilacf@protonmail.com>
 */

        // NPM config
const   App = require("./package.json"),

        // Webpack specific
        build = require("path").resolve(__dirname, App.config.public) + "/js",  // Location of the production file
        dev = "/js/";                                                           // Location of the dev file virtually bundled

module.exports = {
    entry: App.config.source + "/js/" + App.config.filename,
    mode: "development",
    output: {
        filename: App.config.filename,
        path: build,
        publicPath: dev
    },

    // Development - Webpack Router: http://localhost:9000/webpack-dev-server
    devtool: "source-map",
    devServer: {
        contentBase: App.config.source,
        port: App.config.port
    },

    // Plugins
    plugins: []
};
