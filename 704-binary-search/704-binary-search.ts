function search(nums: number[], target: number): number {
    let l: number = 0, r: number = nums.length - 1;
    while(l <= r ) {
        let mid: number = Math.floor(( l + r) / 2);
        if(nums[mid] === target) return mid;
        if(nums[mid] > target) {
            r = mid - 1 ;
        }
        else {
            l = mid + 1;
        }
    }
    return -1;
};