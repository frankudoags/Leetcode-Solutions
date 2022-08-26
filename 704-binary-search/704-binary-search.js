/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if(nums.length === 1 ) {
        return nums[0] === target ? 0 : -1 ;
    }
    let l = 0, r = nums.length - 1;
    
    while(l <= r) {
        let mid = Math.floor((l + r) / 2);
        if(nums[mid] === target) return mid;
        if(nums[mid] < target) {
            l = mid + 1;
        }
        else {
            r = mid - 1;
        }
    }
    return -1;
};