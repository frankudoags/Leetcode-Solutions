function countDistinctIntegers(nums: number[]): number {
    let ans = [...nums];
    for(let i = 0; i < nums.length; i++){
        let temp = reverse(nums[i]);
        ans.push(temp);
    }
    
   let a = new Set([...ans])
   return a.size
};

const reverse = (x) => {
    let rev = 0;
    while(x > 0){
        rev = rev * 10 + x % 10;
        x = Math.floor(x/10)
    }
    return Number(rev)
}