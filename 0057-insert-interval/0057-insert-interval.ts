function insert(intervals: number[][], newInterval: number[]): number[][] {
    //insert the new interval and sort to maintain order
    let newArr = [...intervals, newInterval].sort((a,b) => a[0] - b[0]);
    let stack: number[][] = [];
    //iterate over new arr and use a stack to check for overlap,
    //if overlap, handle overlap
    for(const [x,y] of newArr){
        if(!stack.length || stack[stack.length - 1][1] < x){
            stack.push([x,y]);
        } else {
            stack[stack.length - 1][1] = Math.max(stack[stack.length - 1][1], y);
        }
    }
    return stack;
};