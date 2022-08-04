/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let leftPtr = 0;
    let rightPtr = nums.length -1 ;
    let middle;
    
    while (leftPtr <= rightPtr ) {
        middle = Math.ceil( (leftPtr + rightPtr ) / 2);
        if(nums[middle] === target) {
            return middle;
        }
        if (nums[middle] > target) {
            rightPtr = middle - 1;
        }
        else {
            leftPtr = middle + 1;
        }
    }
    if(nums[middle] < target) {
        return middle + 1;
    }
    return middle;
};