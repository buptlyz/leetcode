// https://leetcode-cn.com/problems/binary-search/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var search = function(nums, target, extra) {
//   if (extra === undefined) {
//     extra = 0;
//   }
//   const len = nums.length, halfLen = Math.floor(len/2);
//   const diff = target - nums[halfLen];
  
//   if (diff === 0) {
//     return halfLen + extra;
//   } 
//   else if (diff > 0) {
//     if (halfLen === (len - 1)) {
//       return -1;
//     }
//     return search(nums.slice(halfLen + 1), target, extra + halfLen + 1);
//   }
//   else {
//     if (halfLen === 0) {
//       return -1;
//     }
//     return search(nums.slice(0, halfLen), target, extra);
//   }
// };
var search = function (nums, target) {
  return bs(nums, target, 0, nums.length - 1);
};

function bs(nums, target, start, end) {
  if (start > end) {
    return -1;
  }
  let mid = ~~((start + end) / 2);
  if (nums[mid] === target) {
    return mid;
  } else if (nums[mid] > target) {
    return bs(nums, target, start, mid - 1);
  } else {
    return bs(nums, target, start + 1, end);
  }
}

module.exports = search;
