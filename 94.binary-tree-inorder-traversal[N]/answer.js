/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let result = [];
    function inOrder(root) {
        if (root != null) {
            if (root.left != null) {
                inOrder(root.left);
            }
            result.push(root.val);
            if (root.right != null) {
                inOrder(root.right);
            }
        }
    }
    inOrder(root);
    return result;
};