use std::collections::HashMap;
impl Solution {
    pub fn next_greater_element(nums1: Vec<i32>, nums2: Vec<i32>) -> Vec<i32> {
        let mut stack = Vec::with_capacity(nums2.len());
        let mut map = HashMap::new();
        for n in nums2 {
            while !stack.is_empty() &&
            n > *stack.last().unwrap() {
                map.insert(stack.pop().unwrap(), n);
            }
            
            stack.push(n);
        }
        
        nums1
        .into_iter()
        .map(|n| *map.get(&n).unwrap_or(&-1))
        .collect()
    }
}