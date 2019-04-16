/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const map = new Map();
    let i = 0;
    while (nums[i] !== undefined) {
        if (map.get(nums[i])) {
            nums.splice(i, 1);
        } else {
            map.set(nums[i++], true);
        }
    }
    return nums.length;
};

module.exports = removeDuplicates;
