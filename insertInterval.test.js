const { Interval, insert } = require('./insertInterval');
// [] [5, 7]
// [[2,6],[7,9]] [15,18]

test('insert interval [2,5] to intervals [[1,3],[6,9]] is [[1,5],[6,9]]', () => {
  const intervals = [new Interval(1, 3),new Interval(6, 9)], newInterval = new Interval(2, 5);
  expect(insert(intervals, newInterval)).toEqual([new Interval(1, 5), new Interval(6, 9)]);
})
test('insert interval [15,18] to intervals [[2,6],[7,9]] is [[2,6],[7,9], [15,18]]', () => {
  const intervals = [new Interval(2, 6), new Interval(7, 9)], newInterval = new Interval(15, 18);
  expect(insert(intervals, newInterval)).toEqual([...intervals, newInterval]);
})
test('insert interval [15,18] to intervals [] is [[15,18]]', () => {
  const intervals = [], newInterval = new Interval(15, 18);
  expect(insert(intervals, newInterval)).toEqual([newInterval]);
})
