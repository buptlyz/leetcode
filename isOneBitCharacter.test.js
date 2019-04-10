const isOneBitCharacter = require('./isOneBitCharacter');

test('[1, 0, 0] is one bit character', () => {
  expect(isOneBitCharacter([1, 0, 0])).toBe(true);
});
test('[1, 1, 0] is one bit character', () => {
  expect(isOneBitCharacter([1, 1, 0])).toBe(true);
});
test('[0, 1, 0] is not one bit character', () => {
  expect(isOneBitCharacter([0, 1, 0])).toBe(false);
});
test('[1, 1, 1, 0] is not one bit character', () => {
  expect(isOneBitCharacter([1, 1, 1, 0])).toBe(false);
});
test('[1, 0, 1, 0] is not one bit character', () => {
  expect(isOneBitCharacter([1, 0, 1, 0])).toBe(false);
});
test('[0, 0, 1, 0] is not one bit character', () => {
  expect(isOneBitCharacter([0, 0, 1, 0])).toBe(false);
});
test('[1, 1, 1, 0] is not one bit character', () => {
  expect(isOneBitCharacter([1, 1, 1, 0])).toBe(false);
});
test('[0, 1, 1, 0] is one bit character', () => {
  expect(isOneBitCharacter([0, 1, 1, 0])).toBe(true);
});
test('[1, 1, 0, 0] is one bit character', () => {
  expect(isOneBitCharacter([1, 1, 0, 0])).toBe(true);
});
