const arrangeCoins = require('./arrangeCoins');

test('arrange 5 coins is 2', () => {
  expect(arrangeCoins(5)).toBe(2);
})
test('arrange 8 coins is 3', () => {
  expect(arrangeCoins(8)).toBe(3);
})
test('arrange 1804289383 coins is 60070', () => {
  expect(arrangeCoins(1804289383)).toBe(60070);
})
