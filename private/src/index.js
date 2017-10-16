/**
 * Making sure that only executes after DOM is ready
 * @todo: comment here
 */
var Ghost = require("./js/ghost-typing.js"),
	EmojiFALL = require("./js/emoji-fall.js");

document.addEventListener(	"DOMContentLoaded",
							function() {
								// Start emojis
								$elements = document.getElementsByClassName("emoji-this");
								for(var i = 0; i < $elements.length; i++)
									$elements[i].addEventListener("click", function(e) {EmojiFALL.start(e, document);});

								// Start ghost
								$elements = document.getElementsByClassName("ghost-this");
								for(var i = 0; i < $elements.length; i++)
									Ghost.start($elements[i], 1);
							},
							false);
