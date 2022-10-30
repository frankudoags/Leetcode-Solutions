/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const map = new Map();
    
    for(let i = 0; i < nums.length; i++) {
        if(!map.has(nums[i])) map.set(nums[i], 1);
        else map.set(nums[i], (map.get(nums[i]) + 1));
    }
    console.log(map);
    let answer;
    let max = 0;   
    for(const [key, value] of map) {
        if(value > max) {
            max = value;
            answer = key;
        }
    }
    return answer;
};