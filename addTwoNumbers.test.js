const addTwoNumbers = require('./addTwoNumbers');
const ListNode = require('./utils/ListNode');

test('add two numbers 2->4->3 and 5->6->4 equals 7->0->8', () => {
  const l1 = new ListNode(2);
  l1.next = new ListNode(4);
  l1.next.next = new ListNode(3);
  const l2 = new ListNode(5);
  l2.next = new ListNode(6);
  l2.next.next = new ListNode(4);
  const result = new ListNode(7);
  result.next = new ListNode(0);
  result.next.next = new ListNode(8);

  expect(addTwoNumbers(l1, l2)).toEqual(result);
})
