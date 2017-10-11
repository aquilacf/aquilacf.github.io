var EmojiFALL = {

	/**
	 * Start emoji fall
	 * @param  {$element} 	$el  	HTML Element
	 * @param  {integer} 	type 	Typing mode 1-x;2-w;4-r;3-xw;5-xr;6-wr;7-xwr;
	 * @return {void}
	 */
	start: function(event, d) {

		 var list = ["astonished-face",
					"crying-face",
					"dizzy-face",
					"face-screaming-in-fear",
					"face-throwing-a-kiss",
					"face-with-cold-sweat",
					"face-with-cowboy-hat",
					"face-with-head-bandage",
					"face-with-tears-of-joy",
					"fisted-hand-sign",
					"grinning-face",
					"male-astronaut-type-4",
					"man-and-woman-holding-hands",
					"nerd-face",
					"rolling-on-the-floor-laughing",
					"smiling-face-with-heart-shaped-eyes",
					"smiling-face-with-open-mouth-and-tightly-closed-eyes",
					"thinking-face"];


		for(var i = 0; i < list.length; i++) {
			this.rain(list[i], i, d);
		}

	},

	/**
	 * Adds a small delay between the rain drops
	 * @param  {string} 	emoji 	Emoji name
	 * @param  {integer} 	i     	Position
	 * @param  {DOM} 		d     	Document
	 * @return {void}
	 */
	rain: function(emoji, i, d) {

		setTimeout(function(self){
			self.drop(emoji, i, d);
		}, this.getRandom(400), this);

	},

	/**
	 * Insert emojis into the DOM
	 * @param  {string} 	emoji 	Emoji name
	 * @param  {integer} 	i     	Position
	 * @param  {DOM} 		d     	Document
	 * @return {void}
	 */
	drop: function(emoji, i, d) {

		var drop = d.createElement("div"),
			screen = d.body.clientWidth,
			size = this.getRandom(108 - 80) + 80; // Min: 80; Max: 108

		drop.className = "emoji-rain";
		drop.style.width = size+ "px";
		drop.style.height = size + "px";
		drop.style.top = '-' + size + "px";
		drop.style.left = this.getRandom(screen - i) + "px"; // Trick to make them move towards the center/left;

		drop.style.backgroundImage = "url('img/emojis/" + emoji + ".png')";
		d.body.prepend(drop);

		setTimeout(function() {
			drop.parentNode.removeChild(drop);
		}, 2000); // Remove from the DOM after 2s

	},

	/**
	 * Generates a proper random number
	 * @param  {integer}	seed 	Random seed
	 * @return {number}     		Random number
	 */
	getRandom: function(seed = 1) {
		return parseInt(seed * (Math.random() % Math.PI));
	}

};


/**
 * Making sure that only executes after DOM is ready
 */
document.addEventListener(	"DOMContentLoaded",
							function() {
								$elements = document.getElementsByClassName("emoji-this");
								for(var i = 0; i < $elements.length; i++)
									$elements[i].addEventListener("click", function(e) {EmojiFALL.start(e, document);});
							},
							false);
