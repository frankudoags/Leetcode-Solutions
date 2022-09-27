/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var sortedSquares = function(nums) {
//     const result = [];
//     for(let i = 0; i < nums.length; i++) {
//         result.push(nums[i]*nums[i]);
//     }
//     result.sort((a,b) => a - b);
//     return result;
// }; Too long

var sortedSquares =(nums)=>nums.map(x=>x*x).sort((a,b)=>a-b)