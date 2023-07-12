use std::collections::HashSet;

impl Solution {
    pub fn intersection(nums1: Vec<i32>, nums2: Vec<i32>) -> Vec<i32> {
        //connvert nums 1 to hash set to remove duplicates
        let nums1_set: HashSet<i32> = nums1.into_iter().collect();
        
        //hashmap to hold ans, used set instead of arrays to avoid dupes
        let mut res = HashSet::new();

        // iterate through nums2, find common elements, and push
        // into hashmap
        nums2.into_iter().for_each(|x| {
            if nums1_set.contains(&x) {
                res.insert(x);
            }
        });

        // since question said return an array of their intersection,
        // convert set into array by converting to iterator and then 
        // collect into a vector, Rust hehe
        res.into_iter().collect::<Vec<i32>>()
    }
}