/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  nums1 = nums1.sort();
  nums2 = nums2.sort();
  const len = Math.max(nums1.length, nums2.length),
    res = [];
  let i = 0,
    j = 0;
  while (i < len && j < len) {
    if (nums1[i] === nums2[j]) {
      res.push(nums1[i]);
      i++;
      j++;
    } else if (nums1[i] < nums2[j]) {
      i++;
    } else {
      j++;
    }
  }
  return res;
};

module.exports = intersect;
