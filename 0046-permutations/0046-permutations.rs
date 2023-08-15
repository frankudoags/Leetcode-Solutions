impl Solution {
    pub fn permute(nums: Vec<i32>) -> Vec<Vec<i32>> {
        let mut res: Vec<Vec<i32>> = vec![];
        let n = nums.len();
        let mut visited = vec![false; n];
        Self::backtrack(&nums, vec![], &mut res, &mut visited);
        
        res
    }
    
    fn backtrack(
        nums: &Vec<i32>,
        mut combination: Vec<i32>,
        res: &mut Vec<Vec<i32>>,
        visited: &mut Vec<bool>
    ) {
       if combination.len() == nums.len() {
           res.push(combination.clone());
           return;
        }
        
        for i in 0..nums.len() {
            if visited[i] { continue; }
            combination.push(nums[i]);
            visited[i] = true;
            Self::backtrack(
                nums,
                combination.clone(),
                res,
                visited
            );
            visited[i] = false;
            combination.pop();
        }
    }
}