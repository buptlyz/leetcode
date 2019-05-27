// 先找左子节点，然后右子节点，最后父节点
// 递归法
// function afterIterator(node) {
//   if (node === null) {
//     return [];
//   }
//   return [...afterIterator(node.left), ...afterIterator(node.right), node.val];
// }

// TODO 循环法
function afterIterator(node) {
  let res = [];
  let path = [];
  while(node) {
    if (node._walked) {
      delete node._walked;
      res.push(node.val);
      node = path.pop();
    } else {
      node._walked = true;
      if (node.left) {
        path.push(node);
        if (node.right) {
          path.push(node.right);
        }
        node = node.left;
      } else {
        res.push(node.val);
        node = path.pop();
      }
    }
  }
  return res;
}

module.exports = afterIterator;
