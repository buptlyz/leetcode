const maxProfit = require('./bestTimeToBuyAndSellStock');

test('max profit of [7,1,5,3,6,4] is 5', () => {
  expect(maxProfit([7,1,5,3,6,4])).toBe(5);
})
