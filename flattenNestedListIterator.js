/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function(nestedList) {
  this.stack = nestedList.reverse();
  this.isInteger = function() {
    return typeof nestedList === 'number';
  }
  this.getInteger = function() {
    if (this.isInteger()) {
      return nestedList;
    } else {
      return null;
    }
  }
  this.getList = function() {
    if (this.isInteger()) {
      return null;
    } else {
      return nestedList;
    }
  }
};


/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function() {
  const stack = this.stack;
  let top = stack.pop();

  /**
   * 栈弹出
   * 1. 若top存在且为list，则将list的每一项按顺序压到栈顶
   * 2. 若top存在，则将top压到栈顶
   * 3. 若栈中还有元素，返回true，否则false
   */
  while(top && !top.isInteger()) {
    const list = top.getList();
    for(let i = list.length - 1; i >= 0; i--) {
      const ele = list[i];
      if(ele != undefined) {
        stack.push(ele);
      }
    }
    top = stack.pop();
  }
  if(top) {
    this.stack.push(top.getInteger());
  }
  return this.stack.length > 0;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {
  // 弹出栈顶项
  return this.stack.pop();
};

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
*/

module.exports = NestedIterator;
