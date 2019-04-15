const searchRange = require('./findFirstAndLastPositionOfElementInSortedArray');

test('first and last position of 8 in [5,7,7,8,8,10] is [3, 4]', () => {
  expect(searchRange([5,7,7,8,8,10], 8)).toEqual([3, 4]);
})
test('first and last position of 1 in [1] is [0, 0]', () => {
  expect(searchRange([1], 1)).toEqual([0, 0]);
})
test('first and last position of 1 in [1, 2] is [0, 0]', () => {
  expect(searchRange([1, 2], 1)).toEqual([0, 0]);
})
test('first and last position of 0 in [-99999,-99998,-9999,-999,-99,-9,-1] is [-1, -1]', () => {
  expect(searchRange([-99999,-99998,-9999,-999,-99,-9,-1], 0)).toEqual([-1, -1]);
})
