use std::collections::HashMap;
impl Solution {
    pub fn majority_element(nums: Vec<i32>) -> Vec<i32> {
        //a hashmap that stores the frequency of each element
        let mut f_map: HashMap<i32,i32> = HashMap::new();
        
        //answer array
        let mut ans: Vec<i32> = vec![];
        
        //calculate n/3
        let check = (nums.len() / 3) as i32;
        
        //iterate through the nums array, increment hashmap count, 
        //check if the count is more than the check value, and that
        //it is no tin the ans array, if all passes, push to ans array
        for &num in &nums {
           let count = f_map.entry(num).or_insert(0);
            *count += 1;
            if *count > check && !ans.contains(&num) {
                ans.push(num);
            }
        }
        //return ans array
        ans
    }
}