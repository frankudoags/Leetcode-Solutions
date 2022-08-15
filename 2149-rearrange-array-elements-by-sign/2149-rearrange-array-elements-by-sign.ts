function rearrangeArray(nums: number[]): number[] {
    const positiveNums: number[] = nums.filter((num: number) => num >= 0);
    const negativeNums: number[] = nums.filter((num: number) => num < 0);

      
    if(positiveNums.length === nums.length) return positiveNums;
    if(negativeNums.length === nums.length) return negativeNums;
    
    
    let reArrangedArray: number[] = [];
    
    for(let i: number = 0; i < positiveNums.length; i++) {
        reArrangedArray.push(positiveNums[i], negativeNums[i]);
    }
    
    return reArrangedArray;
};