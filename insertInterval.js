/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
function Interval(start, end) {
  this.start = start;
  this.end = end;
}
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function(intervals, newInterval) {
  if (intervals.length === 0) {
    return [newInterval];
  }
  let i = 0, res = [];
  //第一步：把可能的排在newInterval 前面的且和newInterval不相交的区间放入答案
  for (; i < intervals.length && newInterval.start > intervals[i].end; i++) {
    res.push(intervals[i]);
  }
  //第二步，接下来的若干区间要是和newInterval有相交，就组合成一个区间加入答案。如果还不相交，就直接加入newIntervals
  if (i < intervals.length && newInterval.end >= intervals[i].start) {
    const start = Math.min(intervals[i].start, newInterval.start);
    let end = Math.max(intervals[i].end, newInterval.end);
    i++;
    while(i < intervals.length && intervals[i].start <= end)
      end = Math.max(end, intervals[i++].end); 
    res.push(new Interval(start, end));
  }
  else {
    res.push(newInterval);
  }
  //第三步：加入剩下的区间
  for(; i < intervals.length; i++) {
    res.push(intervals[i]);
  }
  return res;
};

module.exports = {
  Interval,
  insert
}
