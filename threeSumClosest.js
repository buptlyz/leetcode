/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  const len = nums.length;
  let sum = Infinity,
    diff = Infinity;
  for (let i = 0; i < len - 2; i++) {
    for (let j = i + 1; j < len - 1; j++) {
      const z = nums[i] + nums[j];
      for (let k = j + 1; k < len; k++) {
        const s = z + nums[k],
        d = Math.abs(target - s);
        if (d < diff) {
          diff = d;
          sum = s;
        }
      }
    }
  }
  return sum;
};

module.exports = threeSumClosest;
