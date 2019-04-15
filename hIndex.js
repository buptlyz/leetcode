// https://leetcode-cn.com/problems/h-index/
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  const descend = (a, b) => b - a;
  citations = citations.sort(descend);
  let h = citations.length;
  while (h > 0 && citations[h - 1] < h) {
    h--;
  }
  return h;
};

module.exports = hIndex;
