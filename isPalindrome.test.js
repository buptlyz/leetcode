const isPalindrome = require('./isPalindrome');

test('121 is plaindrome', () => {
  expect(isPalindrome(121)).toBe(true);
})
test('10 is not plaindrome', () => {
  expect(isPalindrome(10)).toBe(false);
})
test('-121 is not plaindrome', () => {
  expect(isPalindrome(-121)).toBe(false);
})
