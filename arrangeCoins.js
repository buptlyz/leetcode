// https://leetcode-cn.com/problems/arranging-coins/submissions/
/**
 * @param {number} n
 * @return {number}
 */
// var arrangeCoins = function(n) {
//   if (n === 0) {
//     return 0;
//   }
//   if (n <= 2) {
//     return 1;
//   }
//   if (n <= 5) {
//     return 2;
//   }
//   let i = 3, diff = 6;
//   while (n - diff - (i+1) >= 0) {
//     diff += ++i;
//   }
//   return i;
// };
var arrangeCoins = function(n) {
  return Math.floor(Math.sqrt(2 * n + 1 / 4) - 1 / 2);
};

module.exports = arrangeCoins;
