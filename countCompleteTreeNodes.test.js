const TreeNode = require('./utils/TreeNode');
const countCompleteTreeNodes = require('./countCompleteTreeNodes');

// [1,2,3,4,5,6]
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);

test('count complete tree nodes of [1,2,3,4,5,6] is 6', () => {
  expect(countCompleteTreeNodes(root)).toBe(6);
})
