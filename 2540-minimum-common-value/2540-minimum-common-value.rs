use std::collections::HashSet;
impl Solution {
    pub fn get_common(nums1: Vec<i32>, nums2: Vec<i32>) -> i32 {
        //collect nums 1 and 2 into a hashset, this removes dupes
        let nums1: HashSet<_> = nums1
        .into_iter()
        .collect();

        let nums2: HashSet<_> = nums2
        .into_iter()
        .collect();
        // return the minimum value in the itersection of the sets, or -1
        *nums1.intersection(&nums2).min().unwrap_or(&-1)
    }
}