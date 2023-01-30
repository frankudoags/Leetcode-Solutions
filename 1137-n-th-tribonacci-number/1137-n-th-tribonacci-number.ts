function tribonacci(n: number): number {
    let arr = [0, 1, 1];
    if(n == 0) return arr[0];
    if( n == 1 || n == 2) return arr[1];
    
    const rec = (num) => {
        if (arr.length > num){
            return arr[num]
        } else{
            let temp = rec(num - 3) + rec(num - 2) + rec(num - 1)
            arr[num] = temp;
            return temp;
        }
    }
    
    return rec(n)
};