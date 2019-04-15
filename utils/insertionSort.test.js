const insertionSort = require('./insertionSort');

test('ascend insertion sort result of [5, 2, 4, 6, 1, 3] is [1, 2, 3, 4, 5, 6]', () => {
  expect(insertionSort([5, 2, 4, 6, 1, 3], 1)).toEqual([1, 2, 3, 4, 5, 6]);
})
test('descend insertion sort result of [5, 2, 4, 6, 1, 3] is [6, 5, 4, 3, 2, 1]', () => {
  expect(insertionSort([5, 2, 4, 6, 1, 3], -1)).toEqual([6, 5, 4, 3, 2, 1]);
})
