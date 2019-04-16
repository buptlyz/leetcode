const TreeNode = require('./utils/TreeNode');
const maxPathSum = require('./binaryTreeMaximumPathSum');

test('max path sum of binary tree [1,2,3] is 6', () => {
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  expect(maxPathSum(root)).toBe(6);
})
test('max path sum of binary tree [-10,9,20,null,null,15,7] is 42', () => {
  const root = new TreeNode(-10);
  root.left = new TreeNode(9);
  root.right = new TreeNode(20);
  root.right.left = new TreeNode(15);
  root.right.right = new TreeNode(7);
  expect(maxPathSum(root)).toBe(42);
})
