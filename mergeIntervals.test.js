const Interval = require('./utils/Interval');
const merge = require('./mergeIntervals');

test('merge intervals [[1,3],[2,6],[8,10],[15,18]] is [[1,6],[8,10],[15,18]]', () => {
  const intervals = [
    new Interval(1,3),
    new Interval(2,6),
    new Interval(8,10),
    new Interval(15,18),
  ];
  const res = [
    new Interval(1,6),
    new Interval(8,10),
    new Interval(15,18),
  ]
  expect(merge(intervals)).toEqual(res);
})
test('merge intervals [[1,4],[4,5]] is [[1,5]]', () => {
  const intervals = [
    new Interval(1,4),
    new Interval(4,5),
  ];
  const res = [
    new Interval(1,5),
  ]
  expect(merge(intervals)).toEqual(res);
})
