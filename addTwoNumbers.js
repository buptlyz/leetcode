const ListNode = require('./utils/ListNode');
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let rest = 0, result = null, oldNode = null, newNode = null;
  while(l1 || l2) {
    newNode = new ListNode(rest);
    if (result === null) {
      result = newNode;
    }
    rest = 0;
    if (l1) {
      newNode.val += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      newNode.val += l2.val;
      l2 = l2.next;
    }
    if (newNode.val >= 10) {
      newNode.val -= 10;
      rest = 1;
    }
    if (oldNode) {
      oldNode.next = newNode;
    }
    oldNode = newNode;
  }
  if (rest) {
    newNode = new ListNode(rest);
    oldNode.next = newNode;
  }
  return result;
};
module.exports = addTwoNumbers;
