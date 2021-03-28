/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function (root) {

};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {

};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {

};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */


// 扁平化
var BSTIterator = function (root) {
  this.idx = 0;
  this.arr = [];
  this.inorderTraversal(root, this.arr);
};

BSTIterator.prototype.next = function () {
  return this.arr[this.idx++];
};

BSTIterator.prototype.hasNext = function () {
  return this.idx < this.arr.length;
};

BSTIterator.prototype.inorderTraversal = function (root, arr) {
  if (!root) {
    return;
  }
  this.inorderTraversal(root.left, arr);
  arr.push(root.val);
  this.inorderTraversal(root.right, arr);
};


// 迭代
var BSTIterator = function (root) {
  this.cur = root;
  this.stack = [];
};

BSTIterator.prototype.next = function () {
  while (this.cur) {
    this.stack.push(this.cur);
    this.cur = this.cur.left;
  }
  this.cur = this.stack.pop();
  const ret = this.cur.val;
  this.cur = this.cur.right;
  return ret;
};

BSTIterator.prototype.hasNext = function () {
  return this.cur !== null || this.stack.length;
};
