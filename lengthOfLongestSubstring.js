/**
 * @param {string} s
 * @return {number}
 */
module.exports = function lengthOfLongestSubstring(s) {
  let m = 0,
    n = 1,
    len = 0,
    map = new Map(),
    maxLen = len;

  while (m < s.length) {
    // len最小值为1
    if (len < 1) {
      len = 1;
    }
    // n比m至少大1
    if (n <= m) {
      n = m + 1;
    }
    map.set(s[m], true);

    while (n < s.length && map.get(s[n]) === undefined) {
      len++;
      map.set(s[n], true);
      n++;
    }

    if (maxLen < len) {
      maxLen = len;
    }

    map.set(s[m], undefined);
    len--;
    m++;
  }

  return maxLen;
};
