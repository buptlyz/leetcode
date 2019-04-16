/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) { 
  if (s == null || s.length < 1) return "";
  let start = 0, end = 0;
  for (let i = 0; i < s.length; i++) {
      const len1 = expandAroundCenter(s, i, i); 
      const len2 = expandAroundCenter(s, i, i + 1); 
      const len = Math.max(len1, len2); 
      if (len > end - start) {
          start = Math.ceil(i - (len - 1) / 2); 
          end = i + len / 2; 
      }
  }
  return s.substring(start, end + 1);
};

/**
 * @param {String} s 
 * @param {Integer} left 
 * @param {Integer} right 
 */
function expandAroundCenter(s, left, right) {
    let L = left, R = right;
    while (L >= 0 && R < s.length && s.charAt(L) === s.charAt(R)) {
        L--;
        R++;
    }
    return R - L - 1;
}

module.exports = longestPalindrome;
