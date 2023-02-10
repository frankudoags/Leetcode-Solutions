/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function(cost) {
    cost.sort((a, b) => b - a);
    let minCost = 0;
    for(let i = 0; i < cost.length; i++){
        if(i % 3 === 2) {
            continue;
        }
        minCost += cost[i]
    }
    return minCost;
};