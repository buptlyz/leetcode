/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const map = new Map();
  let rest, restIndex, result = [];
  for (let i = 0; i < nums.length; i++) {
    rest = target - nums[i];
    restIndex = map.get(rest);
    if (restIndex !== undefined) {
      result = [restIndex, i];
      break;
    }
    map.set(nums[i], i);
  }
  return result;
};
module.exports = twoSum;
