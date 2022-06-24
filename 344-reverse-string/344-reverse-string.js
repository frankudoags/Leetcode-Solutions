/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let leftPtr = 0;
    let rightPtr = s.length -1;
    
   while(leftPtr < rightPtr) {
       let temp = s[leftPtr];
       s[leftPtr] = s[rightPtr];
       s[rightPtr] = temp;

       leftPtr++;
       rightPtr--;
   }
    return s;
};