const TreeNode = require('./utils/TreeNode');/**
* Definition for a binary tree node.
* function TreeNode(val) {
*     this.val = val;
*     this.left = this.right = null;
* }
*/
/**
* @param {TreeNode} root
* @return {number}
*/
var countNodes = function(root) {
   if (root === null) {
       return 0;
   }
   return 1 + countNodes(root.left) + countNodes(root.right);
};

module.exports = countNodes;
