function isPowerOfFour(n: number): boolean {
    return n > 0 && Math.log2(n) % 2 === 0
};