function climbStairs(n: number): number {
    if(n < 3) return n;
    let res = [1, 2];
    for(let i = 2; i < n; i++){
        res[i] = res[i - 1] + res[i - 2];
    }
    return res[n - 1];
};