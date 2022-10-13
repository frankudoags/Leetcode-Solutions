/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
const map = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };
    let result = 0;
    for(let i = 0; i < s.length; i++) {
        if(map[s[i]] < map[s[i + 1]]){
            result += map[s[i + 1]] - map[s[i]];
            i++;
        } else {
            result += map[s[i]]
        }
    }
    return result;
};