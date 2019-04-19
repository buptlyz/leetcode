const kClosest = require('./kClosestPointsToOrigin');

test('1 closest points to origin of [[1,3],[-2,2]] is [[-2, 2]]', () => {
  expect(kClosest([[1,3],[-2,2]], 1)).toEqual([[-2, 2]]);
})
test('2 closest points to origin of [[3,3],[5,-1],[-2,4]] is [[3,3],[-2,4]]', () => {
  expect(kClosest([[3,3],[5,-1],[-2,4]], 2)).toEqual([[3,3],[-2,4]]);
})
test('2 closest points to origin of [[0,1],[1,0]] is [[0,1],[1,0]]', () => {
  expect(kClosest([[0,1],[1,0]], 2)).toEqual([[0,1],[1,0]]);
})
