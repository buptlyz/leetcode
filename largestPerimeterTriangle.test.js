const largestPerimeter = require('./largestPerimeterTriangle');

test('largest perimeter of [2,1,2] is 5', () => {
  expect(largestPerimeter([2,1,2])).toBe(5);
})
test('largest perimeter of [1,2,1] is 0', () => {
  expect(largestPerimeter([1,2,1])).toBe(0);
})
test('largest perimeter of [3,2,3,4] is 10', () => {
  expect(largestPerimeter([3,2,3,4])).toBe(10);
})
test('largest perimeter of [3,6,2,3] is 8', () => {
  expect(largestPerimeter([3,6,2,3])).toBe(8);
})
