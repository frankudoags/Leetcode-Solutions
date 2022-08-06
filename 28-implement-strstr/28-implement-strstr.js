/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle === "") return 0;
    if(haystack.indexOf(needle) === -1) return -1;
    else return haystack.indexOf(needle);
};