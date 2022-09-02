function isSubsequence(s: string, t: string): boolean {
    if(s == t || s == ' ') {
         return true;
    }
    let i: number = 0, j: number = 0;
    while(i < s.length && j < t.length) {
        if(s[i] === t[j]) i++;
        j++;
    }
    return i === s.length;
};