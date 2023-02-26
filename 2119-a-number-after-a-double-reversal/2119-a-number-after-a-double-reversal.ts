function isSameAfterReversals(num: number): boolean {
const num1 = reverse(num);
const num2 = reverse(num1);
return num2 == num
};

const reverse = (x) => {
    let rev = 0;
    let sign = x >= 0 ? 1 : -1
    x = x*sign
    while(x > 0){
        rev = rev * 10 + x % 10;
        x = Math.floor(x/10)
    }
    //mul ans back by sign
    rev *= sign
    
    return Number(rev)
}