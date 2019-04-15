const fourSumCount = require('./fourSumCount');

test('four sum count of [ 1, 2], [-2,-1], [-1, 2], [ 0, 2] is 2', () => {
  expect(fourSumCount([ 1, 2], [-2,-1], [-1, 2], [ 0, 2])).toBe(2);
})
