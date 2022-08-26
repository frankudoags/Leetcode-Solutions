function generate(numRows: number): number[][] {
     if(numRows == 1) return [[1]];
    if(numRows == 2) return [[1], [1,1]];
    let results: [number[], number[]] = [[1], [1,1]];
    
    for(let i = 1; i < numRows - 1; i++) {
        let temp: number[] = results[i]; 
        const newArr: number[] = new Array();
        newArr[0] = 1;
        for(let a = 0; a < temp.length - 1; a ++) {
            newArr.push(temp[a] + temp[a + 1])
        }
        newArr.push(1);
        results.push(newArr);
    }
    return results;
};