/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    let levels = [];
    if (root == null) return levels;
    function helper(node, level) {
        if (levels.length == level) {
            levels.push([]);
        }
        if (level % 2 == 0) {
            levels[level].push(node.val);
        } else {
            levels[level].unshift(node.val);
        }
        if (node.left) {
            helper(node.left, level + 1);
        }
        if (node.right) {
            helper(node.right, level + 1);
        }
    }
    helper(root, 0);
    return levels;
};