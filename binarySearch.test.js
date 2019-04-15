const binarySearch = require('./binarySearch');

test('index of 9 in [-1,0,3,5,9,12] is 4', () => {
  const nums = [-1,0,3,5,9,12], target = 9;
  expect(binarySearch(nums, target)).toBe(4);
})
test('index of 2 in [-1,0,3,5,9,12] is -1', () => {
  const nums = [-1,0,3,5,9,12], target = 2;
  expect(binarySearch(nums, target)).toBe(-1);
})
