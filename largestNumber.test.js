const largestNumber = require('./largestNumber');

test('largest number of [10, 2] is "210"', () => {
  expect(largestNumber([10, 2])).toBe('210');
})
test('largest number of [3,30,34,5,9] is "9534330"', () => {
  expect(largestNumber([3,30,34,5,9])).toBe('9534330');
})
test('largest number of [0, 0] is "0"', () => {
  expect(largestNumber([0, 0])).toBe('0');
})
