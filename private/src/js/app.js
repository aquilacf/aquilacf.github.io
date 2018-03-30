
/**
 * App - 30/Mar/2018
 * @author Áquila Freitas <aquilacf@protonmail.com>
 */

/**
 * Imports
 */
import ghost from "./general/ghost-typing.js";
import emojis from "./general/emoji-fall.js";

(function() {

    var $field = document.getElementById("ghost-this"),
        $picture = document.getElementById("emoji-this");

    ghost.start($field, 1);
    emojis.click($picture, document);

})();
