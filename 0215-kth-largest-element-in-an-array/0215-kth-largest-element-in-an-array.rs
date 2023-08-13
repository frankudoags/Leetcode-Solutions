impl Solution {
    pub fn find_kth_largest(nums: Vec<i32>, k: i32) -> i32 {
        let mut nums = nums;
        nums.sort_by(|a,b| b.cmp(&a));
        return nums[k as usize - 1];
    }
}