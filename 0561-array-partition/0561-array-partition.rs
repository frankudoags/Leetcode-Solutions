impl Solution {
    pub fn array_pair_sum(nums: Vec<i32>) -> i32 {
        let (mut i, mut maxSum, mut nums) = (0, 0, nums);
        nums.sort();
        
        while i < nums.len() {
            maxSum += nums[i];
            i += 2;
        }
        
        maxSum
    }
}