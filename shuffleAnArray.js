/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.backup = [...nums];
  this.cur = [...nums];
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  this.cur = [...this.backup];
  return this.cur;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
  const res = [], len = this.cur.length;
  while (res.length < len) {
    const i = Math.floor(Math.random() * this.cur.length);
    res.push(this.cur.splice(i, 1)[0]);
  }
  this.cur = res;
  return this.cur;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

module.exports = Solution;
