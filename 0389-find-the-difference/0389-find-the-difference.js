/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let sum1 = 0
    for(let i = 0; i < s.length; i++){
        sum1 += s.charCodeAt(i);
    }
    let sum2 = 0
    for(let i = 0; i < t.length; i++){
        sum2 += t.charCodeAt(i);
    }
    return String.fromCharCode(sum2 - sum1)
};