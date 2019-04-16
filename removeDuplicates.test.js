const removeDuplicates = require('./removeDuplicates');

test('remove duplicates from [1,1,2] is 2', () => {
  expect(removeDuplicates([1,1,2])).toBe(2);
})
test('remove duplicates from [0,0,1,1,1,2,2,3,3,4] is 5', () => {
  expect(removeDuplicates([0,0,1,1,1,2,2,3,3,4])).toBe(5);
})
