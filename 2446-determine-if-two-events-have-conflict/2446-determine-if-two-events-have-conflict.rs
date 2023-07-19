impl Solution {
    pub fn have_conflict(event1: Vec<String>, event2: Vec<String>) -> bool {
        //these are the exact instances one can have a connflict
        event1[0] <= event2[1] && event1[1] >= event2[0]
    }
}