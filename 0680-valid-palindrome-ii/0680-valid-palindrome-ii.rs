impl Solution {
    pub fn valid_palindrome(s: String) -> bool {
        let s_bytes = &s.as_bytes();
        let (mut l, mut r) = (0, s_bytes.len() - 1);
        while l < r {
            if s_bytes[l] == s_bytes[r]{
                l += 1;
                r -= 1;
            } else {
                return Self::is_palindrome(s_bytes, l + 1, r) || 
                Self::is_palindrome(s_bytes, l, r - 1);
            }
        }
        true
    }
    
    fn is_palindrome(s: &[u8], mut l: usize,mut r: usize) -> bool {
        if l > r {
            return false;
        }
        while l < r {
            if s[l] != s[r]{
                return false;
            }
            l += 1;
            r -= 1;
        }
        true
    }
}