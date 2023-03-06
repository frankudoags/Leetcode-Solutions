/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let ans = [];
    for(let num of nums1){
        let gt = -1;
        for(let i = nums2.indexOf(num) + 1; i < nums2.length; i++){
            if(nums2[i] > num){
                gt = nums2[i];
                break;
            }
        }
        ans.push(gt);
    }
    return ans;
};