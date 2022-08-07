/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const couple = {
    '[': ']',
    '{': '}',
    '(': ')'
  }
    const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (couple[s[i]]) {
      stack.push(s[i]);
    } else if (couple[stack.pop()] !== s[i]) {
      return false;
    }
  }
  return !stack.length;
};
