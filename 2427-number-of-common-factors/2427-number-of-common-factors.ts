function commonFactors(a: number, b: number): number {  
    let check = a < b ? a : b;
    let ans = 0;
    for(let i = 1; i <= check; i++){
        if(a % i === 0 && b % i === 0) ans++
    }
    return ans
};