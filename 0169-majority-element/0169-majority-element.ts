function majorityElement(nums: number[]): number {
    const map= new Map<number, number> ();
    for(let i = 0; i < nums.length; i++) {
        if(!map.has(nums[i])) map.set(nums[i], 1);
        else map.set(nums[i], (map.get(nums[i]) + 1));
    }
    let answer: number; let max = 0;   
    for(const [key, value] of map) {
        if(value > max) {
            max = value;
            answer = key;
        }
    }
    return answer;
    
};