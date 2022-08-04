/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buyDay = 0;
    let sellDay = 1;
    let maxProfit = 0;
    
    while(sellDay < prices.length) {
        if(prices[buyDay] < prices[sellDay]) {
           let profit = prices[sellDay] - prices[buyDay];
            maxProfit = profit > maxProfit ? profit : maxProfit;
        }
        else {
            buyDay = sellDay;
        }
            sellDay ++;
    }
    return maxProfit;
};