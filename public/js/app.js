/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 * Webpack starting point - 16/Oct/2017
 * @author	Áquila Freitas
 */
var Ghost = __webpack_require__(1),
	EmojiFALL = __webpack_require__(2);

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


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {

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


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = {

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


/***/ })
/******/ ]);