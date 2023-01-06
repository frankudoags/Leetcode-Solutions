function maxIceCream(costs: number[], coins: number): number {
    costs.sort((a,b) => a -b)
    let ans = 0;
    for(let cost of costs){
        if(coins >= cost){
            coins -= cost;
            ans++
        } else {
            break
        }
    }
    return ans
};