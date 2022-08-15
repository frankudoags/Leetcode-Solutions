/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let answer = nums.length === [...new Set(nums)].length ? false : true;
    return answer;
};