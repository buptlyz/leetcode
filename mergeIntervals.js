const Interval = require('./utils/Interval');
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
  intervals = intervals.sort(compare);
  let i = 1, len = intervals.length, prev, curt;
  while(i<len) {
    prev = intervals[i-1];
    curt = intervals[i];
    if (prev.end >= curt.start) {
      intervals.splice(i-1, 2, new Interval(prev.start, curt.end));
      len--;
    } else {
      i++;
    }
  }
  return intervals;
};

function compare(i1, i2) {
  return i1.start - i2.start;
}

module.exports = merge;
