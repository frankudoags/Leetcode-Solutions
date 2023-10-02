/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    s = s.trim().split('');
    if(s.length % 2 !== 0) return false
    const stack: Array<string> = [];
    const couple: Record<string, string> = { ")": "(", "]": "[", "}": "{" };

    for (let char of s) {
        if (!couple[char]) {
            stack.push(char);
            continue;
        }
        if(couple[char] && stack.length == 0) return false
        if (stack.length && couple[char] != stack.pop()) {
            return false
        }
    }

    return stack.length == 0
};