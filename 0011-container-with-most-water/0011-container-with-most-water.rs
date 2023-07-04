impl Solution {
    pub fn max_area(height: Vec<i32>) -> i32 {
        let (mut max, mut a, mut b) = (0, 0, height.len() - 1);
        
        while a < b {
            let min_height = std::cmp::min(height[a], height[b]);
            max = std::cmp::max(max, min_height * (b - a) as i32);
            
            if height[a] <= height[b] {
                a += 1;
            } else {
                b -= 1;
            }
        }
        
        max
    }
}