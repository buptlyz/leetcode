// https://leetcode-cn.com/problems/palindrome-number/
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) {
    return false;
  }
  if (x < 10) {
    return true;
  }
  if (x < 100) {
    return checkIsPalindrome100(x);
  }
  return checkIsPalindrome(x.toString());
};

function checkIsPalindrome100(x) {
  switch (x) {
    case 11:
    case 22:
    case 33:
    case 44:
    case 55:
    case 66:
    case 77:
    case 88:
    case 99:
      return true;
    default:
      return false;
  }
}

function checkIsPalindrome(str) {
  let res = true;
  const len = str.length;
  const mid = Math.floor(len/2) - 1;

  for(let i = mid; i > -1; i--) {
    if (str[i] !== str[len - 1 - i]) {
      res = false;
      break;
    }
  }
  return res;
}

module.exports = isPalindrome;
