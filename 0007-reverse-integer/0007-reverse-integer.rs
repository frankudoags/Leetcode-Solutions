impl Solution {
    pub fn reverse(x: i32) -> i32 {
        let mut negative = false;
        if x < 0 { negative = true; }    
        let mut ans = x.abs().to_string();
        ans = ans.chars().rev().collect();
        
        let a = match ans.parse::<i32>() {
            Ok(n) => if negative {-n} else {n},
            Err(_) => 0
        };
        a
    }
}