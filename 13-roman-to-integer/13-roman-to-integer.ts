function romanToInt(s: string): number {
    const map: object = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };
   let result : number[] = [];
   for(let i = 0; i < s.length; i++) {
       if(map[s[i]] < map[s[i + 1]]) {
              result.push(map[s[i + 1]] - map[s[i]]);
              i++;
       }
       else {
              result.push(map[s[i]]);
       }
   }

   return result.reduce((acc, curr) => acc + curr, 0);
};