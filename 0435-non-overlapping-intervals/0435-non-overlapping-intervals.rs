impl Solution {
    pub fn erase_overlap_intervals(mut intervals: Vec<Vec<i32>>) -> i32 {
        let n = intervals.len();
        // Simple checks
        if n < 2 { return 0 };
        //Sort array by end of each interval
        intervals.sort_by(|a, b| a[1].cmp(&b[1]));
        //use iter to get an iterator of the vector
        //skip the first element
        //use the start of of the first interval as your initial interval
        intervals
        .iter()
        .skip(1)
        .fold((0, intervals[0][1]), |(count, curr), interval| {
            //if end of the prev is greater than the start of the current interval
            //there is an overlap, so we increase our count and maintain curr
            //like we skipped the overlapping node
            if curr > interval[0] {
                (count + 1, curr)
            } else {
            // else keep count the same, and update curr to the next interval's end
                (count, interval[1])
            }
        })
        .0

    }
}