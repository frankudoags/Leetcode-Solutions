function majorityElement(nums: number[]): number[] {
    const map: Map<number, number> = new Map();
    for(let num of nums){
        if(!map.has(num)) map.set(num, 0)
        map.set(num, map.get(num) + 1);
    }
    let check = nums.length / 3;
    let ans: number[] = []
    for(let [key, val] of map){
        if(val > check) ans.push(key)
    }
    return ans
};