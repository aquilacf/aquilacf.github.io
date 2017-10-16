"use strict";

/*
 * Webpack starting point - 16/Oct/2017
 * @author	Áquila Freitas
 */
var Ghost = require("./controllers/ghost-typing.js"),
	EmojiFALL = require("./controllers/emoji-fall.js");
	/*@todo: require does not exist on front end, this breaks the nodemon. install require.js*/

document.addEventListener(	"DOMContentLoaded",
							function() {
								// Start emojis
								var $elements = document.getElementsByClassName("emoji-this");
								for(var i = 0; i < $elements.length; i++)
									$elements[i].addEventListener("click", function(e) {EmojiFALL.start(e, document);});

								// Start ghost
								var $elements = document.getElementsByClassName("ghost-this");
								for(var i = 0; i < $elements.length; i++)
									Ghost.start($elements[i], 1);
							},
							false);
