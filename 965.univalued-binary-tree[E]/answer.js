/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function(root) {
    if(root == null) return true;
    if(root.left == null && root.right == null) return true;
    if(root.left && root.val != root.left.val || root.right && root.val != root.right.val) return false;
    
    return isUnivalTree(root.left) && isUnivalTree(root.right)
};