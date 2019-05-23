/**
 * 将一个数组中两个有序部分合并，A[p..q]和A[p+1..r]合并
 * @param {Array} A 需要合并的数组
 * @param {Integer} p 第一个子数组的start
 * @param {Integer} q 第一个子数组的end
 * @param {Integer} r 第二个子数组的end
 * @param {Integer} sortType 生序1 or 降序-1
 */
function merge(A, p, q, r, sortType) {
  switch (sortType) {
    case -1:
      mergeDescend(A, p, q, r);
      break;
    case 1:
    default:
      mergeAscend(A, p, q, r);
  }
  return A;
}

function mergeAscend(A, p, q, r) {
  const n1 = q - p + 1, // 左子数组length
        n2 = r - q, // 右子数组length
        L = [], // 左子数组
        R = []; // 右子数组
  let i, j;
  for (i = 0; i < n1; i++) {
    L[i] = A[p + i];
  }
  for (j = 0; j < n2; j++) {
    R[j] = A[q + 1 + j];
  }
  L[n1] = Infinity; // 尾部添加大数，作为标识位
  R[n2] = Infinity;
  i = j = 0;
  for (let k = p; k <= r; k++) { // 对比左右子数组顶部元素，取较小值
    if (L[i] <= R[j]) {
      A[k] = L[i];
      i++;
    }
    else {
      A[k] = R[j];
      j++;
    }
  }
}

function mergeDescend(A, p, q, r) {
  const n1 = q - p + 1, n2 = r - q, L = [], R = [];
  let i, j;
  for (i = 0; i < n1; i++) {
    L[i] = A[p + i];
  }
  for (j = 0; j < n2; j++) {
    R[j] = A[q + 1 + j];
  }
  L[n1] = -Infinity;
  R[n2] = -Infinity;
  i = j = 0;
  for (let k = p; k <= r; k++) {
    if (L[i] >= R[j]) {
      A[k] = L[i];
      i++;
    }
    else {
      A[k] = R[j];
      j++;
    }
  }}

module.exports = { merge };
