/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
     let leftPtr: number = 0;
    let rightPtr: number = s.length -1;
    
   while(leftPtr < rightPtr) {
       [s[leftPtr], s[rightPtr]] = [s[rightPtr], s[leftPtr]]

       leftPtr++;
       rightPtr--;
   }
};