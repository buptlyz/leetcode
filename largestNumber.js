/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  function getCode(n) {
    return String(n).charCodeAt();
  }
  function compare(n1, n2) {
    const s1 = String(n1), s2 = String(n2);
    if (s1.length === s2.length) {
      return n2 - n1;
    }
    const code1 = getCode(s1), code2 = getCode(s2);
    if (code1 !== code2) {
      return code2 - code1;
    }
    return parseInt(s2+s1) - parseInt(s1+s2);
  }
  nums = nums.sort(compare);
  if (nums[0] === 0) {
    return '0';
  }
  return nums.join('');
};

module.exports = largestNumber;
