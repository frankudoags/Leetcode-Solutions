/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    //Helper map to keep track of the objects
    let map = new Map();
    //Count to keep track of pairs 
    let count = 0;
    
    for(let i = 0; i < s.length; i++) {
        const char = s[i];
        if(map.has(char) ) {
            count +=2;
            map.delete(char);
        }
        else {
            map.set(char, 1);
        }
    }
    if(map.size > 0) {
        count++;
    }
    
    return count;
};
/**
Create a map and iterate through the length of the string
For each item, we check if it is in the map,
if it is, we increment count to 2 and we delete the character.

example: 
aaabbb
we set first a to map {a:1,}
then we see second a, we increment count by 2, as we have found a pair and they'll
be at the palindrome start and end.


We continue until we are done with the string.
We must also check that the size of the map is not more than zero.
If it is, we increment count by 1, to account for a single character that
can be added to the existing longest palindrome.
*/