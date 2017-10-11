var Ghost = {

	/**
	 * Start ghost
	 * @param  {$element} 	$el  	HTML Element
	 * @param  {integer} 	type 	Typing mode 1-x;2-w;4-r;3-xw;5-xr;6-wr;7-xwr;
	 * @return {void}
	 */
	start: function($el, type) {

		var text = $el.textContent || $el.dataset.ghost || '';

		// Clear text
		$el.textContent = '';

		// @TODO: create new ghosts;
		switch(type){
			case 1:
				this.type1(text, $el);
				break;
			case 2:
				this.type2(text, $el);
				break;
			case 4:
				this.type4(text, $el);
			default:
				this.type7(text, $el);
		}

	},

	/**
	 * Type 1 simply writes the text
	 * @param  {string} 	text 	Full text
	 * @param  {$element} 	$el  	HTML Element
	 * @return {void}
	 */
	type1: function(text, $el) {

		var d = 0;
		for(var i = 0; i < text.length; i++) d = this.write(text, i, $el);

	},

	/**
	 * Type 2 clears the text
	 * @param  {string} 	text 	Full text
	 * @param  {$element} 	$el  	HTML Element
	 * @return {void}
	 */
	type2: function(text, $el) {

		var d = 0;
		text = $el.textContent;
		for(var i = 0; i < text.length; i++) d = this.unwrite(text, i, $el);

	},

	type4: function(text, $el) {

		/**
		 * @TODO
		 */

	},

	type4: function(text, $el) {

		/**
		 * @TODO
		 */

	},

	type7: function(text, $el) {

		/**
		 * @TODO
		 */

	},

	/**
	 * Prints the char after a delay
	 * @param  {string} 	text   	Full string
	 * @param  {integer} 	index  	Current position
	 * @param  {$element} 	$field 	HTML Element
	 * @param  {integer} 	delay  	Delay start
	 * @return {integer}        	Print timestamp
	 */
	write: function(text, index, $field, delay = 0) {

		delay += this.getDelay(index);

		setTimeout(function() {
			$field.textContent += text.substring(index, index + 1);
		}, delay);

		return delay;

	},

	/**
	 * Unprints the char after a delay
	 * @param  {string} 	text   	Full string
	 * @param  {integer} 	index  	Current position
	 * @param  {$element} 	$field 	HTML Element
	 * @param  {integer} 	delay  	Delay start
	 * @return {integer}        	Unprint timestamp
	 */
	unwrite: function(text, index, $field, delay = 0) {

		delay += this.getDelay(index);

		setTimeout(function() {
			$field.textContent = $field.textContent.slice(0, -1);
		}, delay);

		return delay;

	},

	/**
	 * Generate typing speed
	 * @param  {integer}	index 	Current position
	 * @param  {integer}	speed 	Speed of the typing
	 * @return {integer}       		Delay
	 */
	getDelay: function(index, speed = 280) {
		return (index * speed) + this.getRandom(speed);
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
								$elements = document.getElementsByClassName("ghost-this");
								for(var i = 0; i < $elements.length; i++)
									Ghost.start($elements[i], 1);
							},
							false);
