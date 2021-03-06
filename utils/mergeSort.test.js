const { merge } = require('./mergeSort');

test('ascend merge [0, 0, 1, 3, 5, 2, 4, 6, 0, 0], 2, 4, 7 is [0, 0, 1, 2, 3, 4, 5, 6, 0, 0]', () => {
  expect(merge([0, 0, 1, 3, 5, 2, 4, 6, 0, 0], 2, 4, 7, 1)).toEqual([0, 0, 1, 2, 3, 4, 5, 6, 0, 0]);
})
test('descend merge [0, 0, 5, 3, 1, 6, 4, 2, 0, 0], 2, 4, 7 is [0, 0, 6, 5, 4, 3, 2, 1, 0, 0]', () => {
  expect(merge([0, 0, 5, 3, 1, 6, 4, 2, 0, 0], 2, 4, 7, -1)).toEqual([0, 0, 6, 5, 4, 3, 2, 1, 0, 0]);
})
