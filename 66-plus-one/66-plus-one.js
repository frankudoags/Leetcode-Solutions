/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    digits = BigInt(digits.join('')) + BigInt(1);
    digits = digits.toString().split('');
    return digits;
};