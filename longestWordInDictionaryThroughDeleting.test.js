const findLongestWord = require('./longestWordInDictionaryThroughDeleting');

test('longest word in ["ale","apple","monkey","plea"] through deleting "abpcplea" is "apple"', () => {
  const s = "abpcplea", d = ["ale","apple","monkey","plea"];
  expect(findLongestWord(s, d)).toBe('apple');
})
test('longest word in ["ba","ab","a","b"] through deleting "bab" is "apple"', () => {
  const s = "bab", d = ["ba","ab","a","b"];
  expect(findLongestWord(s, d)).toBe('ab');
})
