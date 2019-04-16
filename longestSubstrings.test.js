const longestSubstrings = require('./longestSubstrings');

test('longest substring of "abcdef" and "acdefgh" is ["cdef"]', () => {
  expect(longestSubstrings('abcdef', 'acdefgh')).toEqual(["cdef"]);
})
