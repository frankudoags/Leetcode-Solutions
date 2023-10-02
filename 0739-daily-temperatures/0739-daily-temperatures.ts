function dailyTemperatures(temp: number[]): number[] {
    let ans = []

    for(let i = 0; i < temp.length; i++){
        for(let j = i + 1; j < temp.length; j++){
            if(temp[j] > temp[i]) {
                ans[i] = j - i;
                break;
            }
        }
            if(!ans[i]) ans[i] = 0
    }
    return ans
};