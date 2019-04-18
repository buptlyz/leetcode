const intersect = require('./intersectionOfTwoArraysII');

test('intersection of [1, 2, 2, 1] and [2, 2] is [2, 2]', () => {
  expect(intersect([1, 2, 2, 1], [2, 2])).toEqual([2, 2]);
})
test('intersection of [4,9,5] and [9,4,9,8,4] is [4,9]', () => {
  expect(intersect([4,9,5], [9,4,9,8,4])).toEqual([4,9]);
})
