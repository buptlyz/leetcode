const threeSumClosest = require('./threeSumClosest');

test('three sum of [-1,2,1,-4] closest to 1 is 2', () => {
  expect(threeSumClosest([-1,2,1,-4], 1)).toBe(2);
})
test('three sum of [1,2,4,8,16,32,64,128] closest to 82 is 82', () => {
  expect(threeSumClosest([1,2,4,8,16,32,64,128], 82)).toBe(82);
})
