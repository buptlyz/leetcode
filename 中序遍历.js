// 先找左子节点，然后父节点，最后右子节点
// 递归法
// function midIterator(node) {
//   if (node === null) {
//     return [];
//   }
//   return [...midIterator(node.left), node.val, ...midIterator(node.right)];
// }

// TODO 循环法
function midIterator(node) {
  const res = [];
  const path = [];
  while(node) {
    if (node.left) {
      path.push(node);
      node = node.left;
    } else {
      res.push(node.val);
      node = path.pop();
      while(node) {
        res.push(node.val);
        if (node.right) {
          node = node.right;
          break;
        } else {
          node = path.pop();
        }
      }
    }
  }
  return res;
}

module.exports = midIterator;
