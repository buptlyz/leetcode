const isAnagram = require('./validAnagram');

test('anagram and nagaram are valid anagram', () => {
  expect(isAnagram('anagram', 'nagaram')).toBe(true);
})
test('rat and car are not valid anagram', () => {
  expect(isAnagram('rat', 'car')).toBe(false);
})
