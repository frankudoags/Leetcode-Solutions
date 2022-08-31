function isPerfectSquare(num: number): boolean {
     let l: number = 0, r: number = num;
    while(l <= r) {
        let mid: number = Math.floor((l + r) / 2);
        if(mid*mid == num) return true;
        if(mid*mid > num) {
            r = mid - 1;
        }
        else {
            l = mid + 1;
        }
    }
    return false;
};