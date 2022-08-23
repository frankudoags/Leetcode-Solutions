/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    num = BigInt(num.join('')) + BigInt(k);
    num = num.toString().split('');
    return num;
};