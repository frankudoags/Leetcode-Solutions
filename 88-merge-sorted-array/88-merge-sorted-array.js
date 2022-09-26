/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    
    if(nums1.length > 1) {
        for(let i = nums1.length - 1; i >= m; i--) {
            if(nums1[i] === 0) {
                nums1.pop();
            }
            else {
                break;
            }
        }
    }
    else {
        if(nums1[0] === 0) nums1.pop();
    }
    
    
    for(let i = 0; i < nums2.length; i++) {
        nums1.push(nums2[i]);
    }
    
    
    nums1.sort((a, b) => a - b);
    return nums1;
};