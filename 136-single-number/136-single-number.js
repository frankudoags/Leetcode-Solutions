/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    nums = nums.sort();
    for(let num of nums) {
        if(nums.lastIndexOf(num) === nums.indexOf(num)) return num
    }
};