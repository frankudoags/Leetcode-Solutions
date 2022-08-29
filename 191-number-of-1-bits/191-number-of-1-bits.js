/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = (n) => n.toString(2).split('').reduce((a, b) => +a + +b);