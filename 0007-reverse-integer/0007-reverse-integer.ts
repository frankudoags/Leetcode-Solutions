function reverse(x: number): number {
    let rev = 0;
    //get sign to use, if num is negative, mul by -1 
    //so that we can continue,
    //we mul ans back by sign when we are done reversing
    let sign = x >= 0 ? 1 : -1
    x = x*sign
    while(x > 0){
        rev = rev * 10 + x % 10;
        x = Math.floor(x/10)
    }
    //mul ans back by sign
    rev *= sign
    //check that rev fits in 32-bit and return rev if true, else return 0
    return (rev > -(2**31) && rev <= (2**31 - 1)) ? rev : 0
};