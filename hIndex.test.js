const hIndex = require('./hIndex');

test('hIndex of [3,0,6,1,5] is 3', () => {
  expect(hIndex([3,0,6,1,5])).toBe(3);
})
