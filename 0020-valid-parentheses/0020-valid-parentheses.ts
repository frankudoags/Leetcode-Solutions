/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if(s.length % 2 !== 0) return false
    s = s.trim().split('');
    const stack: Array<string> = [];
    const couple: Record<string, string> = { ")": "(", "]": "[", "}": "{" };

    for (let char of s) {
        if (!couple[char]) stack.push(char);
        else if (couple[char] != stack.pop()) return false
    }

    return stack.length == 0
};