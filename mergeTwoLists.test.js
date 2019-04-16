const ListNode = require('./utils/ListNode');
const mergeTwoLists = require('./mergeTwoLists');

test('merge [1, 2, 4] and [1, 3, 4] is [1, 1, 2, 3, 4, 4]', () => {
  const l1 = new ListNode(1);
  l1.next = new ListNode(2);
  l1.next.next = new ListNode(4);
  const l2 = new ListNode(1);
  l2.next = new ListNode(3);
  l2.next.next = new ListNode(4);
  const res = new ListNode(1);
  res.next = new ListNode(1);
  res.next.next = new ListNode(2);
  res.next.next.next = new ListNode(3);
  res.next.next.next.next = new ListNode(4);
  res.next.next.next.next.next = new ListNode(4);

  expect(mergeTwoLists(l1, l2)).toEqual(res);
})
