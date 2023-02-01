/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if((str1 + str2) != (str2 + str1)) return ""
    let maxlen = gcd(str1.length, str2.length);
    return str2.substring(0, maxlen);
};

const gcd = (x, y) => {
    if(y == 0) return x
    return gcd(y, x % y)
}