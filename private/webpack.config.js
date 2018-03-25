
/**
 * Webpack config file - 25/Mar/2018
 * @author Áquila Freitas <aquilacf@protonmail.com>
 */

const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    }
};
