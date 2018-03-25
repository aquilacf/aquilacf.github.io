"use strict";

/*
 * Local development server - 15/Aug/2017
 * @author	Áquila Freitas
 * @note	Not in use anymore. replaced by webpack-dev-server
 * @deprecated
 */

const 	App = require("./package.json"),
        express = require("express"),
        server = express(),
        dir = __dirname + App.config.source;

// Route static files


// server.all(/^\/(index\.html)?(private)?(\/)?$/, function (request, response) {
//     response.redirect("http://localhost:" + App.config.port + "/public/");
// });

server.all(/^((?!public).)*$/, function (request, response) {
    response.redirect("http://localhost:" + App.config.port + "/public/");
});

server.all(/^((?!public).)*$/, function (request, response) {
    response.redirect("http://localhost:" + App.config.port + "/public/");
});

server.use(express.static(dir));

// Route unmatched static to index
// server.get('*', function(request, response){
//     console.log("Missing: " + request.url);
//     response.sendFile("index.html", {root: dir});
// });

// Start development server
server.listen(App.config.port, function() {
    console.log("\n\nDevelopment server for: " + App.name + "\nListening: http://localhost:" + App.config.port + "\n");
});
