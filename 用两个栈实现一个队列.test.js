const Queue = require('./用两个栈实现一个队列');

const queue = new Queue();
queue.unshift(1);
queue.unshift(2);
queue.unshift(3);

test('[1, 2, 3] length equal 3', () => {
  expect(queue.length).toBe(3);
});
test('[1, 2, 3] shift 1', () => {
  expect(queue.shift()).toBe(1);
});
test('[1, 2, 3] length equal 2', () => {
  expect(queue.length).toBe(2);
});
