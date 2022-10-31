/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let dupe, missing, N = nums.length;
    for(let i = 0; i < N; i++){
        nums[(nums[i] - 1) % 10_000] += 10_000;
    }
    for(let i = 0; i < N; i++){
        if(nums[i] > 20_000) dupe = i + 1;
        if(nums[i] < 10001) missing = i + 1;
    }
    return [dupe, missing]
}