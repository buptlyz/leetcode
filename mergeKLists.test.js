const ListNode = require('./utils/ListNode');
const mergeKLists = require('./mergeKLists');

test('merge 3 lists [1, 4, 5], [1, 3, 4], [2, 6] is [1, 1, 2, 3, 4, 4, 5, 6]', () => {
  const l1 = new ListNode(1);
  l1.next = new ListNode(4);
  l1.next.next = new ListNode(5);
  const l2 = new ListNode(1);
  l2.next = new ListNode(3);
  l2.next.next = new ListNode(4);
  const l3 = new ListNode(2);
  l3.next = new ListNode(6);
  const res = new ListNode(1);
  res.next = new ListNode(1);
  res.next.next = new ListNode(2);
  res.next.next.next = new ListNode(3);
  res.next.next.next.next = new ListNode(4);
  res.next.next.next.next.next = new ListNode(4);
  res.next.next.next.next.next.next = new ListNode(5);
  res.next.next.next.next.next.next.next = new ListNode(6);
  expect(mergeKLists([l1, l2, l3])).toEqual(res);
})
