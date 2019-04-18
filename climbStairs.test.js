const climbStairs = require('./climbStairs');

test('There are 1 ways to climb 1 stairs', () => {
  expect(climbStairs(1)).toBe(1);
});
test('There are 2 ways to climb 2 stairs', () => {
  expect(climbStairs(2)).toBe(2);
});
test('There are 7 ways to climb 21 stairs', () => {
  expect(climbStairs(7)).toBe(21);
});
