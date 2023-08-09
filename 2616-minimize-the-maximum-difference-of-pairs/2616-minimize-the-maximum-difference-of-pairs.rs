impl Solution {
    pub fn minimize_max(nums: Vec<i32>, p: i32) -> i32 {
        let mut nums = nums;
        //sort nums to ensure elements are arranged with a little
        //abs difference as possible
        nums.sort();
        
        let(mut left, mut right) = (0, nums[nums.len() - 1] - nums[0]);
        
        while left < right {
            let mid = left + (right - left) / 2;
            
            if Self::count_valid_pairs(&nums, &mid) >= p {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        
        left
    }
    
    fn count_valid_pairs(nums: &Vec<i32>, threshold: &i32) -> i32 {
        let(mut i, mut pairs) = (0, 0);

        while i < nums.len() - 1 {
            if (nums[i + 1] - nums[i]) <= *threshold {
                i += 1;
                pairs += 1;
            }
            i += 1;
        }
        pairs
    }
}