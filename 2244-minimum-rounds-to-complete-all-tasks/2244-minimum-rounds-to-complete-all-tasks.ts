function minimumRounds(tasks: number[]): number {
    const map:Record<number, number> = {}
    let ans = 0;
    for(const task of tasks){
        map[task] > 0 ? map[task]++ : map[task] = 1
    }
    for( const obj in map){
        if(map[obj] < 2) return -1;
        ans += Math.ceil(map[obj] / 3);
    }
    return ans
};