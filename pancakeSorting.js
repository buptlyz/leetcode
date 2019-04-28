/**
 * @param {number[]} A
 * @return {number[]}
 */
var pancakeSort = function(A) {
  const len = A.length;
  let B = [];
  for (let i = 0; i < len; i++) {
    B.push(i+1);
  }
  var compare = (i1, i2) => A[i2-1] - A[i1-1];
  B = B.sort(compare);
  const res = [];
  let flag = len;
  for (let i = 0; i < len; i++) {
    if (i !== len-B[i]) {
      res.push(B[i]);
      res.push(flag--);
    }
  }
  return res;
};

module.exports = pancakeSort;
