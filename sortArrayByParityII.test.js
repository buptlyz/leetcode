const sortArrayByParityII = require('./sortArrayByParityII');

test('sort array [4,2,5,7] by parity is [4,5,2,7],[4,7,2,5],[2,5,4,7],[2,7,4,5]', () => {
  expect(sortArrayByParityII([4,2,5,7])).toEqual([4,5,2,7]);
})
