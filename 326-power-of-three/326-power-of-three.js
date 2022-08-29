/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = (n) => 3**parseInt(Math.log(n)/Math.log(3)) === n