function maxProfit(prices: number[]): number {
    let ptr1: number = 0, ptr2: number = 1;
    let maxProfit: number = 0;
    
    while(ptr2 < prices.length) {
        if(prices[ptr2] > prices[ptr1]) {
            let profit = prices[ptr2] - prices[ptr1];
            maxProfit = profit > maxProfit ? profit : maxProfit;
        }
        else {
            ptr1 = ptr2;
        }
        ptr2++;
    }
    return maxProfit;
};