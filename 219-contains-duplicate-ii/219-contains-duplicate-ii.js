/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
//O(n^2) time, O(1) space
// var containsNearbyDuplicate = function(nums, k) {
//     for(let i=0; i<nums.length; i++){
//         for(let j=i+1;j<nums.length; j++){
//             if((nums[i]==nums[j]) && (Math.abs(i-j)<=k)){
//                 return true;
//             }
//         }
//     }
//     return false;
// };


//optimized solution using maps to slow down time
//O(n) time, O(n) space
var containsNearbyDuplicate = function(nums, k) {
    let map = new Map();
    for (const [i , n] of nums.entries()) {
        if(map.has(n) && (i - map.get(n)) <=k ) return true;
        map.set(n , i);
    }
    return false;
}