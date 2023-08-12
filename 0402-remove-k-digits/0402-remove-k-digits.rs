impl Solution {
    pub fn remove_kdigits(num: String, k: i32) -> String {
        let (mut k, mut digits) = (k, String::with_capacity(num.len()));
        
        for digit in num.chars() {
            while k > 0 && // k is still > 0
            !digits.is_empty() && // String digits is not empy so we can pop
            digit < digits.chars().last().unwrap() // current digit is smaller
            {
                //we want to remove the bigger rightmost bit
                digits.pop();
                // and decrement k by 1
                k -= 1;
            }
            //skip any leading zeros
            if digits.is_empty() && digit == '0'{
                continue;
            }
            digits.push(digit);
        }
        
        //clear any left over mighty digits if k > 0
        for _ in 0..k {
            digits.pop();
        }
        
        if digits.is_empty() {
            String::from("0")
        } else {
            digits
        }
    }
}