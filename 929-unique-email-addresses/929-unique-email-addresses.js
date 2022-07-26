/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    let answer = new Set();
    
    for (let email of emails) {
        let curr = email.split('@');
        let currEmail = '';
        
        for(char of curr[0]) {
            if(char === '.') continue;
            if(char === '+') break;
            currEmail += char;
        }
        currEmail += '@' + curr[1];
        answer.add(currEmail);
    }
    return answer.size;
};