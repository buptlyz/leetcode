/**
 * @param {Array} arr
 * @param {Integer} sortType
 */
export default function insertionSort(arr, sortType) {
  if (!Array.isArray(arr)) {
    throw new TypeError('第一个参数应该是数组');
  }
  if (arr.length <= 1) {
    return arr;
  }
  switch (sortType) {
    case -1:
      return insertionSortDescend(arr);
    case 1:
    default:
      return insertionSortAscend(arr);
  }
}

function insertionSortAscend(arr) {
  arr = [...arr];
  for (let j = 1, len = arr.length; j < len; j++) {
    const key = arr[j];
    let i = j - 1;
    while (~i && arr[i] > key) {
      arr[i+1] = arr[i];
      i -= 1;
    }
    arr[i+1] = key;
  }
  return arr;
}

function insertionSortDescend(arr) {
  arr = [...arr];
  for (let j = 1, len = arr.length; j < len; j++) {
    const key = arr[j];
    let i = j - 1;
    while (~i && arr[i] < key) {
      arr[i+1] = arr[i];
      i -= 1;
    }
    arr[i+1] = key;
  }
  return arr;
}

module.exports = insertionSort;
