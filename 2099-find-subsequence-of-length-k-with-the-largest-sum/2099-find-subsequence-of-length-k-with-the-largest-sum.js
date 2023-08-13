/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function(nums, k) {
    let num_ids = nums.map((num, id) => [num, id]);
    num_ids.sort((a, b) => b[0] - a[0]);
    let ans = num_ids.slice(0, k).sort((a,b) => a[1] -b[1]);
    ans = ans.map(([num, _]) => num);
    return ans;
};