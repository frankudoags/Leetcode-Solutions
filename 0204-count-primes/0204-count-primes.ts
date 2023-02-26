function countPrimes(n: number): number {
    if(n < 2) return 0
    let isPrime: boolean[] = Array(n).fill(true);
    for(let i = 2; i**2 <= n; i++){
        if(isPrime[i]){
            for(let j = 2 * i; j <= n; j += i){
                isPrime[j] = false;
            }
        }
    }
    let count = 0;
    for(let i = 2; i < n; i++){
        if(isPrime[i]) count++
    }
    
    return count
};