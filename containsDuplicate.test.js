const containsDuplicate = require('./containsDuplicate');

test('[1, 2, 3, 1] contains duplicate item', () => {
  expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
});
test('[1, 2, 3, 4] doesn\'t contains duplicate item', () => {
  expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
});
test('[1,1,1,3,3,4,3,2,4,2] contains duplicate item', () => {
  expect(containsDuplicate([1,1,1,3,3,4,3,2,4,2])).toBe(true);
});
