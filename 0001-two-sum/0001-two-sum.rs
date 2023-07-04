use std::collections::HashMap;

impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        
        let mut hash_map = HashMap::with_capacity(nums.len());
        
        for (i, &num) in nums.iter().enumerate() {
            match hash_map.get(&num) {
                Some(&j) => return vec![i as i32, j as i32],
                None => {
                    hash_map.insert(target-num, i);
                },
            }
        }
        
        unreachable!()
    }
}