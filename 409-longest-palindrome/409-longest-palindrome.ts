function longestPalindrome(s: string): number {
    let map = new Map();
    let count: number = 0;
    
    for(let i = 0; i < s.length; i++) {
        if(map.has(s[i])) {
            count += 2;
            map.delete(s[i])
        }
        else {
            map.set(s[i], 1);
        }
    }
    if(map.size > 0) count++;
    return count;
};