//we solve wirth union-find algo
//we initialize a map from 0 -25 to keep track of the alphabets a-z
//and we keep each element as the parent initially

function smallestEquivalentString(s1: string, s2: string, baseStr: string): string {
      const parent: Record<number, number> = {};
    for(let i = 0; i < 26; i++) parent[i] = i;  
    //remap all equivalent characters lexicographically in the parent hash_map
    for(let i = 0; i < s1.length; i++){
        let a = find(charCodeDiff(s1, i), parent);
        let b = find(charCodeDiff(s2, i), parent);
        if(a < b){
            parent[b] = a;
        } else if ( b < a){
            parent[a] = b;
        }
    }
    
    let ans = "";
    for(let i = 0; i < baseStr.length; i++){
        ans += String.fromCharCode(find(charCodeDiff(baseStr, i), parent) + 97);
    }
    return ans;
};

const charCodeDiff = (a: string, i: number) => {
    return a.charCodeAt(i) - "a".charCodeAt(0);
}

//recursively find the parent of a word
const find = (word, parent) => {
   return parent[word] === word ? word : find(parent[word], parent)
}