/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
  const len = A.length,
    odd = [],
    even = [];
  for(let i = 0; i < len; i++) {
    if (isOdd(i)) {
      if (isEven(A[i])) {
        if (odd.length) {
          const index = odd.pop();
          const tmp = A[i];
          A[i] = A[index];
          A[index] = tmp;
        } else {
          even.push(i);
        }
      }
    } else {
      if (isOdd(A[i])) {
        if (even.length) {
          const index = even.pop();
          const tmp = A[i];
          A[i] = A[index];
          A[index] = tmp;
        } else {
          odd.push(i);
        }
      }
    }
  }
  return A;
};

function isOdd(a) {
  return a%2 === 1;
}
function isEven(a) {
  return a%2 === 0;
}

module.exports = sortArrayByParityII;
