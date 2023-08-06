/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    let total = 0;
    if(timeSeries.length == 0) return 0;
    for(let i = 0; i < timeSeries.length - 1; i++) {
        total += Math.min(timeSeries[i + 1] - timeSeries[i], duration);
    }
    
    return total + duration;
};