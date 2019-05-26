const TreeNode = require('./utils/TreeNode');
/**
 * 
 * @param {Array} preorder 前序排列
 * @param {Array} inorder 中序排列
 * @param {Integer} length 树节点数
 */
function construct(preorder, inorder, length) {
  if (!preorder || !inorder || !length) {
    return null;
  }
  return constructCore(preorder, 0, length-1, inorder, 0, length-1);
}

function constructCore(preorder, preStart, preEnd, inorder, inStart, inEnd) {
  const rootVal = preorder[preStart];
  let _preStart = preStart+1,
      preLeftEnd = null;
  let _inStart = inStart,
      inLeftEnd = null;

  while(++preStart < preEnd && ++inStart < inEnd) {
    if (inorder[inStart] === rootVal) {
      preLeftEnd = --preStart;
      inLeftEnd = inStart-1;
      break;
    }
  }

  const rootNode = new TreeNode(rootVal);
  rootNode.left = constructCore(preorder, _preStart+1, preLeftEnd, inorder, _inStart, inLeftEnd);
  rootNode.right = constructCore(preorder, preLeftEnd+1, preEnd, inorder, inLeftEnd+2, inEnd);
  return rootNode;
}
