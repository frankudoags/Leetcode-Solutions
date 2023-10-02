function dailyTemperatures(temperatures: number[]): number[] {
    //monotonically decreasig stack
    const stack: number[] = [];
    //answer array
    let ans: number[] = new Array(temperatures.length).fill(0)

    for (let i = 0; i < temperatures.length; i++) {
        let temp = temperatures[i];
        //if current temperature is greater than temperature of top of stack
        while(stack.length && temp > temperatures[stack[stack.length - 1]] ){
            //pop top of stack day
            let old = stack.pop()
            //set it's answer as the difference in current day and it's own day
            ans[old] = i - old;
        }
        //push new day into stack
        stack.push(i)
    }
    return ans

};

/**
- Brute force approach, but very slow O(n^2)
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
     */