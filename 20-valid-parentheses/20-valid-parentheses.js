/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length % 2 !== 0 ) return false;
     s = s.trim().split('');
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
