function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;
    
    let map: Record<string, number> = {};
    
    for(let i = 0; i < s.length; i++){
        if(!map[s[i]]) map[s[i]] = 0;
        map[s[i]]++;
        
        if(!map[t[i]]) map[t[i]] = 0;
        map[t[i]]--;
        
    }
    let ans = true;
    for(const [key, val] of Object.entries(map)){
        if(val !== 0){
            ans = false;
            break;
        }
    }
    return ans;
};