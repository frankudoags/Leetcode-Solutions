/**
 * @param {number} num
 * @return {number}
 */
//Naive solution
//O(1) space O(n) time
// var addDigits = function(num) {
//     while(num > 9) {
//         num = num.toString().split('').reduce((acc, cur) => +acc + +cur, 0);
//     };
    
//     return num;
// };

var addDigits = function(num) {
    if(num === 0) return 0;
    if(num % 9 === 0) return 9;
    return num % 9;
}



//The digital root (also repeated digital sum) of a natural number in a given radix is the (single digit) value obtained by an iterative process of summing digits, on each iteration using the result from the previous iteration to compute a digit sum. The process continues until a single-digit number is reached.

//In base 10, this is equivalent to taking the remainder upon division by 9 (except when the digital root is 9, where the remainder upon division by 9 will be 0), which allows it to be used as a divisibility rule.

//Hence i can simply check if the number is less than 9 and return the number since it is a single digit 
//I also checked if the modulus of the number divided by 9 was 0 and returned 9 because if a number falls under the divisibility rule
//if those cases dont pass, then i return the remainder of the division by 9