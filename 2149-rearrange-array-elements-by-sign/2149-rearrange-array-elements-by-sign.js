/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    const positiveNums = nums.filter((num) => num >= 0);
    const negativeNums = nums.filter((num) => num < 0);
    
    if(positiveNums.length === nums.length) return positiveNums;
    if(negativeNums.length === nums.length) return negativeNums;
    
    
    let reArrangedArray = [];
    
    for(let i = 0; i < positiveNums.length; i++ ) {
        reArrangedArray.push(positiveNums[i], negativeNums[i]);
    }
    return reArrangedArray;
}