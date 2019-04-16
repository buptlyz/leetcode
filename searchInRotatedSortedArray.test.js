const search = require('./searchInRotatedSortedArray');

test('search 0 in [4,5,6,7,0,1,2] is 4', () => {
  expect(search([4,5,6,7,0,1,2], 0)).toBe(4);
})
test('search 2 in [7,8,1,2,3,4,5,6] is 3', () => {
  expect(search([7,8,1,2,3,4,5,6], 2)).toBe(3);
})
