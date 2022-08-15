/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let newArr = [...new Set(nums)];
    let answer = nums.length === newArr.length ? false : true;
    return answer
};