/**
 * @param {string} s
 * @return {number}
 */
var minimumMoves = function(s) {
    let i = 0, moves = 0;
    
    while(i < s.length) {
        if(s[i] == 'X'){
            i += 3;
            moves++
        } else {
            i++
        }
    }
    
    return moves
};