/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const str = s.split("")
    let i = 0, j = str.length - 1;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    
    while (i < j) {
        if(vowels.includes(str[i].toLowerCase()) && vowels.includes(str[j].toLowerCase()) ) {
            [str[i], str[j]] = [str[j], str[i]];
            i++;
            j--;
        }
        if(!vowels.includes(str[i].toLowerCase())) {
            i++;
        }
         if(!vowels.includes(str[j].toLowerCase())) {
            j--;
        }
        
    }
    
    return str.join('');
};

/**
We use two pointers to track the elements in the array gotten from the string
and check if they are vowels, if we get a match when both elements are both vowels
we swap them and continue searching
*/