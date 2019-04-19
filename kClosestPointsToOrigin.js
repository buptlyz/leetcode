/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
  if (points.length <= K) {
    return points;
  }
  const map = new WeakMap();
  function compare(p1, p2) {
    let d1, d2;
    if (map.has(p1)) {
      d1 = map.get(p1);
    } else {
      d1 = p1[0]**2 + p1[1]**2;
      map.set(p1, d1);
    }
    if (map.has(p2)) {
      d2 = map.get(p2);
    } else {
      d2 = p2[0]**2 + p2[1]**2;
      map.set(p2, d2);
    }
    return d1 - d2;
  }
  return points.sort(compare).slice(0, K);
};

module.exports = kClosest;
