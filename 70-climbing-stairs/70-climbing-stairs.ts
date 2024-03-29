function climbStairs(n: number): number {
    if(n < 3) return n;
    let result: number[] = [1, 2];
    for(let i = 2; i < n; i++) {
        result[i] = result[i - 1] + result[i - 2];
    }
    return result[n - 1];
};