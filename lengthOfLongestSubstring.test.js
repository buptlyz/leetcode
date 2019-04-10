const lengthOfLongestSubstring = require('./lengthOfLongestSubstring');

test('length of longest substring of abcabcbb equals 3', () => {
  expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
})
test('length of longest substring of bbbbb equals 1', () => {
  expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
})
test('length of longest substring of pwwkew equals 3', () => {
  expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
})
test('length of longest substring of "" equals 0', () => {
  expect(lengthOfLongestSubstring("")).toBe(0);
})
test('length of longest substring of " " equals 1', () => {
  expect(lengthOfLongestSubstring(" ")).toBe(1);
})
