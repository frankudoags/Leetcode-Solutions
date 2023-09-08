function generate(numRows: number): number[][] {
    const results: [number[]] = [[1]];
    for(let i = 1; i < numRows; i++) {
        results[i] = [];
        results[i][0] = 1;
        results[i][i] = 1;
        for(let j = 1; j < i; j++) {
            results[i][j] = results[i-1][j -1] + results[i -1][j];
        }
    }
    return results;
};