/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */


function guessNumber(n: number): number {
    if(guess(n) === 0) return n;
    let l: number = 1, r: number = n;
    while (l <= r) {
    let mid: number = Math.floor((l + r) / 2);
    if(guess(mid) === 0) return mid;
    if(guess(mid) === 1) {
        l = mid + 1;
    }
    else {
       r = mid - 1; 
    }
    }
};