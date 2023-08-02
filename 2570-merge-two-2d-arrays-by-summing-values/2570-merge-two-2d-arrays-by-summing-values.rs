use std::collections::HashMap;
impl Solution {
    pub fn merge_arrays(nums1: Vec<Vec<i32>>, nums2: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        let mut check: HashMap<i32, i32> = HashMap::new();
        
        for val in &nums1 {
            let count = check.entry(val[0]).or_insert(0);
            *count += val[1];
        }
        
        for val in &nums2 {
            let count = check.entry(val[0]).or_insert(0);
            *count += val[1];
        }
        
        let mut res: Vec<Vec<i32>> = vec![];
        
        for (key, val) in &check {
            res.push(vec![*key, *val]);
        }
        
        res.sort_by(|a, b| a[0].cmp(&b[0]));
        res
    }
}
