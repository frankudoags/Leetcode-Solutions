function arrangeCoins(n: number): number {
    if(n < 0) return;
    return Math.floor(Math.sqrt(2*n + 0.25) - 0.5)
};

/**
 * Math: Using Sum of Integers Formula
 *
 * This problem can be reduced down to:
 *      (K * (K+1))/2 <= N
 *      Simplifying, we get: k <= sqrt(2n + 1/4) - 1/2
 * Since we want the row that has full levels, we just need to return the floor of
 * above result
 */