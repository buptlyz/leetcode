const ListNode = require('./utils/ListNode');
const insertionSortList = require('./insertionSortList');

test('insertion sort list 4->2->1->3 is 1->2->3->4', () => {
  const head = new ListNode(4);
  head.next = new ListNode(2);
  head.next.next = new ListNode(1);
  head.next.next.next = new ListNode(3);
  const res = new ListNode(1);
  res.next = new ListNode(2);
  res.next.next = new ListNode(3);
  res.next.next.next = new ListNode(4);
  expect(insertionSortList(head)).toEqual(res);
})
test('insertion sort list -1->5->3->4->0 is -1->0->3->4->5', () => {
  const head = new ListNode(-1);
  head.next = new ListNode(5);
  head.next.next = new ListNode(3);
  head.next.next.next = new ListNode(4);
  head.next.next.next.next = new ListNode(0);
  const res = new ListNode(-1);
  res.next = new ListNode(0);
  res.next.next = new ListNode(3);
  res.next.next.next = new ListNode(4);
  res.next.next.next.next = new ListNode(5);
  expect(insertionSortList(head)).toEqual(res);
})
