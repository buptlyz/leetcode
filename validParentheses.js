/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s.length === 0) {
    return true;
  }
  
  const map = new Map([['(', ')'], ['{', '}'], ['[', ']']]);
  const stack = [];
  for (let c of s) {
    if(map.has(c)) {
      stack.push(c);
    } else {
      const top = stack.pop();
      if (c !== map.get(top)) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

module.exports = isValid;
