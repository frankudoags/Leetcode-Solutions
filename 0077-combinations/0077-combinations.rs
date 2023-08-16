impl Solution {
    pub fn combine(n: i32, k: i32) -> Vec<Vec<i32>> {
        let mut res: Vec<Vec<i32>> = vec![];
        let arr: Vec<i32> = (1..=n).collect();
        Self::backtrack(k, vec![], &mut res, &arr);
        res
    }
    
    fn backtrack(
        k: i32,
        mut combination: Vec<i32>,
        res: &mut Vec<Vec<i32>>,
        arr: &[i32]
    ) {
        if combination.len() == k as usize {
            res.push(combination.clone());
            return
        }
        
       for i in 0..arr.len() {
           combination.push(arr[i]);
           Self::backtrack(k, combination.clone(), res, &arr[i+1..]);
           combination.pop();
        } 
    }
}