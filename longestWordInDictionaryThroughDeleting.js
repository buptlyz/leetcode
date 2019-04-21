/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
var findLongestWord = function(s, d) {
  d = d.sort(compare);
  for (let str of d) {
    if (isValid(s, str)) {
      return str;
    }
  }
  return '';
};

function compare (s1, s2) {
  const len1 = s1.length,
    len2 = s2.length;
  if (len1 === len2) {
    let i = 0;
    while(i<len1) {
      const code1 = s1[i].charCodeAt(), code2 = s2[i].charCodeAt();
      if (code1 === code2) {
        i++;
      } else {
        return code1 - code2;
      }
    }
    return false;
  } else {
    return len2 - len1
  }
}

function isValid(s, str) {
  const lenS = s.length, lenStr = str.length;
  let i = 0, j = 0;
  while(i<lenS && j<lenStr) {
    if (s[i] === str[j]) {
      i++;
      j++;
    } else {
      i++;
    }
  }
  return j === lenStr;
}

module.exports = findLongestWord;
