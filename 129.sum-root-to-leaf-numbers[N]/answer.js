/**
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
var sumNumbers = function(root) {
  return helper(root, 0);
};

var helper = function(root, i) {
  if (root == null) {
    return 0;
  }
  let temp = i * 10 + root.val;
  if (root.left == null && root.right == null) {
    return temp;
  }
  return helper(root.left, temp) + helper(root.right, temp);
}

/*
 * 思路：dfs
 * 时间复杂度：O(n)，空间复杂度：O(n)
 */