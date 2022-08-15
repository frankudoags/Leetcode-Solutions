/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
  let pointer = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[pointer]) {
      pointer++;
      nums[pointer] = nums[i];
      console.log(i, nums)
    }
  }
  nums.length = pointer + 1;
  
  return nums.length;
};
