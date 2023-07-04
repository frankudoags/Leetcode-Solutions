impl Solution {
    pub fn remove_duplicates(nums: &mut Vec<i32>) -> i32 {
        //set prev to smallest possible integer
        let mut prev: i32 = i32::MIN;
        //scan through nums using retain
        nums.retain(|n| {
            //check if number is the prev number
            match *n == prev {
                //if true, return false, and thus number won't be retained
                true => false,
                //if false, update prev, and retain num by returning true
                false => {
                    prev = *n;
                    true
                }
            }
        });
        
        nums.len() as i32
    }
}