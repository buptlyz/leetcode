const longestPalindrome = require('./longestPalindrome');

test('longest palindrome of "babad" is "aba"', () => {
  expect(longestPalindrome('babad')).toBe('aba');
})
test('longest palindrome of "cbbd" is "bb"', () => {
  expect(longestPalindrome('cbbd')).toBe('bb');
})
test('longest palindrome of "aba" is "aba"', () => {
  expect(longestPalindrome('aba')).toBe('aba');
})
