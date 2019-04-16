const ListNode = require("./utils/ListNode");
const mergeTwoLists = require("./mergeTwoLists");
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  const len = lists.length;
  switch (len) {
    case 0:
      return null;
    case 1:
      return lists[0];
    case 2:
      return mergeTwoLists(lists[0], lists[1]);
    default:
      const { left, right } = splitLists(lists);
      return mergeTwoLists(mergeKLists(left),mergeKLists(right));
  }
};

function splitLists(lists) {
  const left = [],
    right = [],
    len = lists.length,
    mid = Math.floor(lists.length / 2);
  for (let i = 0; i < mid; i++) {
    left.push(lists[i]);
  }
  for (let j = mid; j < len; j++) {
    right.push(lists[j]);
  }
  return { left, right };
}

module.exports = mergeKLists;
