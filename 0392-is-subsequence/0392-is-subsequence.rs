impl Solution {
    pub fn is_subsequence(s: String, t: String) -> bool {
        if s.len() == 0 {
            return true;
        }
        if s.len() > t.len() {
            return false;
        }
        let mut ans = 0;

        for i in 0..t.len() {
            if s.as_bytes()[ans] == t.as_bytes()[i as usize] {
                ans += 1;
                if ans == s.len() { break; }
            }
        }

        ans == s.len()
    }
}