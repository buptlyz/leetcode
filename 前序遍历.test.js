const TreeNode = require('./utils/TreeNode');
const preIterator = require('./前序遍历');

const tree = new TreeNode(10);
tree.left = new TreeNode(6);
tree.left.left = new TreeNode(4);
tree.left.right = new TreeNode(8);
tree.right = new TreeNode(14);
tree.right.left = new TreeNode(12);
tree.right.right = new TreeNode(16);

test('前序遍历\n10\n6 4 \n4 8 12 16\n的结果是[10, 6, 4, 8, 14, 12, 16]', () => {
  expect(preIterator(tree)).toEqual([10, 6, 4, 8, 14, 12, 16]);
});
