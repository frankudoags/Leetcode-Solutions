/**
 * @param {number[]} nums
 * @return {number[]}
 */
function majorityElement(nums) {
  const map= new Map();
    for(let i = 0; i < nums.length; i++) {
        if(!map.has(nums[i])) map.set(nums[i], 1);
        else map.set(nums[i], (map.get(nums[i]) + 1));
    }
    let answer = [];  
    let checker = nums.length / 3;
    for(const [key, value] of map) {
        if(value > checker) {
         answer.push(key);  
        }
    }
    return answer;
}