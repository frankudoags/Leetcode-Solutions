/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    s = s.toLowerCase();
    let string = "";
    for(let i = 0; i < s.length; i++) {
        string += s.charCodeAt(i) - 96;
    }
    
    while(k > 0) {
        string = string.toString().split('').reduce((acc, cur) => +acc + +cur, 0);
        k--;
    }
    return string;
};