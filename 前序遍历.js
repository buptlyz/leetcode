// 先找父节点，然后左子节点，最后右子节点
// 递归法
// function preIterator(node) {
//   if (node === null) {
//     return [];
//   }
//   return [node.val, ...preIterator(node.left), ...preIterator(node.right)];
// }

// TODO 循环法
function preIterator(node) {
  const res = [];
  const right = [];
  while(node) {
    res.push(node.val);
    if (node.left) {
      if (node.right) {
        right.push(node.right);
      }
      node = node.left;
    } else if (node.right) {
      node = node.right;
    } else {
      if (right.length) {
        node = right.pop();
      } else {
        node = null;
      }
    }
  }
  return res;
}

module.exports = preIterator;
