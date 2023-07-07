impl Solution {
    pub fn search_insert(nums: Vec<i32>, target: i32) -> i32 {
        let (mut l, mut r) = (0, nums.len());
        while l < r {
            let mid = l + ((r - l) / 2);
            if nums[mid] < target {
                l = mid + 1;
            } else {
                r = mid;
            }
        }
        l as _
    }
}