use std::collections::HashMap;
impl Solution {
    pub fn merge_arrays(nums1: Vec<Vec<i32>>, nums2: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        //Intuition
        // direct comaprison of arrays, add similar ids, push single ids separately inplace taking advantage of the fact that the arrays were already sorted
        let (mut l, mut r) = (0, 0);
        let (len1, len2) = (nums1.len(), nums2.len());
        let mut res: Vec<Vec<i32>> = vec![];
        
        while (l < len1) | (r < len2) {
            if l == len1 { res.extend_from_slice(&nums2[r..]); break }
            else if r == len2 { res.extend_from_slice(&nums1[l..]); break }
            
            let (id_1, val_1) = (nums1[l][0], nums1[l][1]);
            let (id_2, val_2) = (nums2[r][0], nums2[r][1]);
            
            if id_1 == id_2 {
                res.push(vec![id_1, val_1 + val_2]);
                l += 1; r += 1;
            }
            else if id_1 > id_2 {
                res.push(nums2[r].to_vec());
                r += 1;
            } else {
                res.push(nums1[l].to_vec());
                l += 1; 
            }
        }
        
        res
    
    }
}
       
        //Naive solution, uses hashmap + sorting
        // //create hashmap
        // let mut check: HashMap<i32, i32> = HashMap::new();
        // //fill hashmap
        // for val in &nums1 {
        //      *check.entry(val[0]).or_insert(0) += val[1];
        // }
        // //update hashmap
        // for val in &nums2 {
        //   *check.entry(val[0]).or_insert(0) += val[1];
        // }
        // let mut res: Vec<Vec<i32>> = vec![];
        // //push all elem in map into res
        // for (key, val) in &check {
        //     res.push(vec![*key, *val]);
        // }
        // //sort res
        // res.sort_by(|a, b| a[0].cmp(&b[0]));
        // res