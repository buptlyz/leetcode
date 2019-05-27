const TreeNode = require('./utils/TreeNode');
const midIterator = require('./中序遍历');

const tree = new TreeNode(10);
tree.left = new TreeNode(6);
tree.left.left = new TreeNode(4);
tree.left.right = new TreeNode(8);
tree.right = new TreeNode(14);
tree.right.left = new TreeNode(12);
tree.right.right = new TreeNode(16);

test('中序遍历\n10\n6 4 \n4 8 12 16\n的结果是: ', () => {
  expect(midIterator(tree)).toEqual([4, 6, 8, 10, 12, 14, 16]);
});
