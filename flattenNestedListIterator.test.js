const NestedIterator = require('./flattenNestedListIterator');

function flatten(nestedList) {
  const i = new NestedIterator(nestedList), a = [];
  while (i.hasNext()) a.push(i.next());
  return a;
}

test('flatten [[1,1],2,[1,1]] is [1,1,2,1,1]', () => {
  const i1 = new NestedIterator(1),
    i2 = new NestedIterator([i1,i1]),
    i3 = new NestedIterator(2),
    i4 = new NestedIterator([i1,i1]);
  expect(flatten(new NestedIterator([i1, i2, i3]))).toEqual([1,1,2,1,1]);
})
test('flatten [1,[4,[6]]] is [1,4,6]', () => {
  const i1 = new NestedIterator(1),
    i2 = new NestedIterator(4),
    i3 = new NestedIterator(6),
    i4 = new NestedIterator([i3]),
    i5 = new NestedIterator([i2,i4]);
  expect(flatten([i1,i5])).toEqual([1,4,6]);
})
