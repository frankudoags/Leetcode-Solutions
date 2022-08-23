/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n < 3) return n;
    //an array to keep track of the first and second possible
    //ways given that n is less than 3
    const result = [1, 2];
    //a for loop that creates the resultant answer by creating a new 
    //array value from the sum of the two preceeding values in the array
    for (let i = 2; i <= n; i++) {
        result[i] = result[i - 1] + result[i - 2];
     }
    //given that arrays are zero-indexed
      return result[n - 1];    
};

/* nth steps are the combination of n-1 and n-2 steps
	2   ->  2  11, 2
    3   ->  3  111, 21, 12
    4   ->  5  1111, 112,  211, 22, 121
    5   ->  8  11111, 2111, 1211, 1121, 1112, 221, 122, 212
    6   ->  13 111111, 21111, 12111, 11211, 11121, 2211, 1221, 1122, 1212, 2121, 2112, ????, 222,  
    7   ->  21
    8   ->  34
    9   ->  55
    10  ->  89
    
    
    This shows that if n = 6;
    no of distinct ways is no of ways of (n-1) + no of ways of (n -2) 
    which is no of ways of(5) - no of ways of(4)
    = 8 + 5 
    = 13
    
    [1,2]
    [1, 2, 3],
    [1,2,3,5],
    [1,2,3,5,8],
    [1,2,3,5,8,13],
    [1,2,3,5,8,13,21]
    for(i = 2; i <=n; i++) {
    numOfWays[i] = numOfWays[i -1] + numOfWays[i -2];
}
*/