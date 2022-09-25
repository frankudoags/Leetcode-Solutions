function getRow(rowIndex: number): number[] {
    if(rowIndex === 0) return [1];
    if(rowIndex === 1) return [1, 1];
    let results = [[1], [1,1]];
    
    for(let i = 1; i <= rowIndex; i++) {
        let temp = results[i]; 
        const newArr = new Array();
        newArr[0] = 1;
        for(let a = 0; a < temp.length - 1; a ++) {
            newArr.push(temp[a] + temp[a + 1])
        }
        newArr.push(1);
        results.push(newArr);
    }
    return results[rowIndex];

}

