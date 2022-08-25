/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    for(let i = 0; i < s.length; i++) {
        const char = s[i];   
        if (s.indexOf(char) === s.lastIndexOf(char))
        return i;
    }
    return -1;
};