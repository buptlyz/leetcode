const ListNode = require('./utils/ListNode');
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let res = new ListNode(0), crt = res;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      crt.next = l1;
      l1 = l1.next;
    } else {
      crt.next = l2;
      l2 = l2.next;
    }
    crt = crt.next;
  }
  crt.next = l1 || l2;
  return res.next;
};

module.exports = mergeTwoLists;
