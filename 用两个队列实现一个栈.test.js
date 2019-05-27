const Stack = require('./用两个队列实现一个栈');

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

test('stack length is 3', () => {
  expect(stack.length).toBe(3);
});
test('stack pop is 3', () => {
  expect(stack.pop()).toBe(3);
});
test('stack length is 2', () => {
  expect(stack.length).toBe(2);
});
