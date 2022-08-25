/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
    return !(nums.length === [...new Set(nums)].length )
}