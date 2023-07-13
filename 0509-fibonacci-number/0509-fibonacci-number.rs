impl Solution {
    pub fn fib(n: i32) -> i32 {
        // create a small range from 0-n then apply fold method on it, 
        //this is like a reduce method in javascript, it continues to apply
        //the closure function on the first element in the fold method
        // we use it to create a fibonnaci kind of increment and we return the
        // second element(ie the .1 in the end of the code) as the fib answer
        (0..n)
        .fold((1, 0), |(first, second), _| (second, first + second) )
        .1
    }
}