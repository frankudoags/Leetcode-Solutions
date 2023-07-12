use std::collections::HashMap;
impl Solution {
    pub fn majority_element(nums: Vec<i32>) -> Vec<i32> {
        //a hashmap that stores the frequency of each element
        let mut f_map: HashMap<i32,i32> = HashMap::new();
        
        //iterate through the nums array
        for elem in nums.iter() {
            //insert 1 if element not found, else update it's count
            f_map.entry(*elem).and_modify(|counter| *counter += 1).or_insert(1);
        }

        //calculate n/3
        let check: i32 = (nums.len() / 3) as i32;
        
        //answer array
        let mut ans: Vec<i32> = vec![];
        
        //iterate through hashmap, check each key, 
        //check if val > n/3, if yes, push to ans array
        for (key, val) in f_map.iter() {
            if val > &check {
                ans.push(*key)
            } 
        }

        //return ans array
        ans
    }
}