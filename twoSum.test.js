const twoSum = require('./twoSum');

test('two sum of [2, 7, 11, 15] target 9 is [0, 1]', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1])
})
