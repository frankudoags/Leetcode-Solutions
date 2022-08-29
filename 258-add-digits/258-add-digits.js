/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    while(num > 9) {
        num = num.toString().split('');
        console.log(num);
        num = num.reduce((acc, cur) => +acc + +cur, 0);
        console.log(num);
    };
    
    return num;
};