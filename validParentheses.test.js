const isValid = require('./validParentheses');

test('"" is valid parentheses', () => {
  expect(isValid('')).toBe(true);
})
test('"()" is valid parentheses', () => {
  expect(isValid('()')).toBe(true);
})
test('"()[]{}" is valid parentheses', () => {
  expect(isValid('()[]{}')).toBe(true);
})
test('"(]" is not valid parentheses', () => {
  expect(isValid('(]')).toBe(false);
})
test('"([)]" is not valid parentheses', () => {
  expect(isValid('([)]')).toBe(false);
})
test('"{[]}" is valid parentheses', () => {
  expect(isValid('{[]}')).toBe(true);
})
test('"{[}" is not valid parentheses', () => {
  expect(isValid('{[}')).toBe(false);
})
