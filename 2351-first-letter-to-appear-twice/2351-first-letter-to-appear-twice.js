/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    let map = new Set();
    for (let letter of s) {
        if(map.has(letter)) {
            return letter;
        }
        else {
            map.add(letter);
        }
    }
};