function maxProfit(prices: number[]): number {
    let lowest = 1_000_000; let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        let price = prices[i];
        if (price < lowest) {
            lowest = price;
        }
        let profit = price - lowest;
        maxProfit = Math.max(profit, maxProfit);
    }
    return maxProfit;
};