impl Solution {
    pub fn merge(mut intervals: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        //sort intervals so if any overlap exists, 
        //overlapping elements are side by side
        intervals.sort_by_key(|interval| interval[0]);
        let mut ans: Vec<Vec<i32>> = vec![];
        
        let a = intervals
        .iter()
        .skip(1) //we skip first element as we use it as initial element for fold
        .fold(
            (intervals[0][0], intervals[0][1]),
             |(l, r), current| {
                 //if no overlap
                 if current[0] > r {
                     ans.push(vec![l, r]);
                     //early return 
                     return (current[0], current[1])
                 }
                 //overlap, do comparison
                 (l, r.max(current[1]))
            });
        //since fold returns last element as a tuple, we have to handle the last one manually
        ans.push(vec![a.0, a.1]);
        
        ans
    }
}