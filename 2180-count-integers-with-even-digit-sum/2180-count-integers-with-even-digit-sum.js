/**
 * @param {number} num
 * @return {number}
 */
var countEven = function(num) {
    let count = 0;
    
    for(let i = 1; i <= num; i++) {
       if(digitSum(i) % 2 === 0) count++; 
    }
    return count;
};
    
const digitSum = (num) => {
  return num.toString().split('').reduce((acc, cur) => +acc + +cur, 0);
}