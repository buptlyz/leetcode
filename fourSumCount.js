/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
  const abMap = new Map();
  let res = 0;
  for (let a of A) {
    for (let b of B) {
      const sum = a + b;
      if (abMap.get(sum)) {
        abMap.set(sum, abMap.get(sum) + 1);
      } else {
        abMap.set(sum, 1);
      }
    }
  }
  for (let c of C) {
    for (let d of D) {
      const sum = -(c + d);
      if (abMap.get(sum)) {
        res += abMap.get(sum);
      }
    }
  }
  return res;
};

module.exports = fourSumCount;
