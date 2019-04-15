/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  if (nums.length === 1) {
      if (target === nums[0]) {
          return [0, 0];
      } else {
          return [-1, -1];
      }
  }
  let start = 0, end = nums.length - 1, halfLen = ~~((end - start + 1)/2), exists = false;
  while (start <= end) {
      if (target === nums[halfLen]) {
          start = halfLen;
          end = -Infinity;
          exists = true;
          break;
      } else if (target > nums[halfLen]) {
          start = halfLen + 1;
      } else {
          end = halfLen - 1;
      }
      
      halfLen = ~~((end + start + 1)/2);
  }
  if (exists) {
      end = start;
      while (target === nums[start - 1]) {
          start--;
      }
      while (target === nums[end + 1]) {
          end++;
      }
      return [start, end];
  } else {
      return [-1, -1];
  }
};

module.exports = searchRange;
