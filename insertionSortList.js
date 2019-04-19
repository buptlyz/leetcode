const ListNode = require('./utils/ListNode');
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {
  // return insertionSortList1(head);
  return insertionSortList2(head);
};

function insertionSortList1(head) {
  let cache = [], curt = head;
  while(curt) {
    cache.push(curt.val);
    curt = curt.next;
  }
  cache = cache.sort((a, b) => a - b);
  curt = head;
  for (let i = 0, len = cache.length; i < len; i++) {
    curt.val = cache[i];
    curt = curt.next;
  }
  return head;
}

function insertionSortList2(head) {
  if (!head || !head.next) {
    return head;
  }
  let curt = head.next, prev = head;
  while(curt) {
    let copy = curt, hcurt = head, hprev = null;
    curt = curt.next;
    while(copy.val > hcurt.val && hcurt !== copy) {
      hprev = hcurt;
      hcurt = hcurt.next;
    }
    if (hcurt === copy) {
      prev = copy;
    } else {
      if (hprev) {
        hprev.next = copy;
      } else {
        head = copy;
      }
      copy.next = hcurt;
      prev.next = curt;
    }
  }
  return head;
}

module.exports = insertionSortList;
