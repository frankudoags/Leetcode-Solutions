impl Solution {
    pub fn combination_sum(candidates: Vec<i32>, target: i32) -> Vec<Vec<i32>> {
        let mut res: Vec<Vec<i32>> = vec![];
        Self::backtrack(&candidates, target, 0, vec![], &mut res);
        res
    }
    
    fn backtrack(
        candidates: &Vec<i32>,
        target:i32,
        start: usize,
        mut combination: Vec<i32>,
        res: &mut Vec<Vec<i32>>
    ) {
        //circuit breaker
        if target == 0 {
            res.push(combination.clone());
            return;
        }
        
        //basecase
        for i in start..candidates.len() {
            if candidates[i] <= target {
                //push value into combination array
                combination.push(candidates[i]);
                //recursively backtrack with current combination,
                //a reduced target,and same params
                Self::backtrack(
                    candidates,
                    target - candidates[i],
                    i,
                    combination.clone(),
                    res
                );
                
                //after exploring all possible backtracking cases
                //pop a value of the combination, and continue the for loop
                //looking for new combination opportunites
                combination.pop();
            }
        }
    }
}