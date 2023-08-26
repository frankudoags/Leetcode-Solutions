impl Solution {
    pub fn max_profit(prices: Vec<i32>) -> i32 {
        let (mut max_profit, mut lowest_price) = (0, 100_000);
        
        for (day, price) in prices.iter().enumerate() {
            if price < &lowest_price {
                lowest_price = *price;
            }
            
            let profit = *price - lowest_price;

            max_profit = max_profit.max(profit);
            
        }
        
        max_profit
    }
}
