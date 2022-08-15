/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let j: number = 0, count: number = 0;
    for(let i = 0; i< nums.length; i++){
        if(nums[i] !== 0){
            nums[j++] = nums[i];
            count++;
        }
    }
    for(let a = count; a < nums.length; a++) {
            nums[a] = 0;
        }
};
