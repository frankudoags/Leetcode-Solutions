function maximumEvenSplit(finalSum: number): number[] {
    if(finalSum % 2 !== 0) return []
    
    let ans = []
    
    let counter = 2
    
    while( finalSum - counter >= 0){
        ans.push(counter);
        finalSum -= counter;
        counter += 2;
    }
    
    if(finalSum > 0) {
        ans[ans.length - 1] = ans[ans.length - 1] + finalSum;
    }
    
    return ans
};