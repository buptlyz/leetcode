/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) { 
  if (target === nums[0]) {
    return 0;
  }
  const len = nums.length; 
  if (target === nums[len-1]) {
    return len - 1;
  }
  let start = 0, 
    end = len - 1, 
    res = -1;
  while (start < end) {
    const mid = start + ~~((end - start + 1) / 2); 
    if (target === nums[mid]) {
      res = mid;
      break;
    } else if (target > nums[mid]) {
      if (nums[mid] > nums[0]) {
        start = mid + 1;
      } else {
        if (target > nums[end]) {
          end = mid - 1;
        } else {
          start = mid + 1;
        }
      }
    } else {
      if (nums[mid] > nums[0]) {
        if (target < nums[start]) {
          start = mid + 1;
        } else {
          end = mid - 1;
        }
      } else {
        end = mid - 1;
      }
    }
  }
  if (res === -1 && start === end && target === nums[start]) {
    res = start;
  }
  return res;
};

module.exports = search;
