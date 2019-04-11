const reverse = require('./reverse');

test('reverse 123 equals 321', () => {
  expect(reverse(123)).toBe(321);
})
test('reverse -123 equals -321', () => {
  expect(reverse(-123)).toBe(-321);
})
test('reverse 120 equals 21', () => {
  expect(reverse(120)).toBe(21);
})
