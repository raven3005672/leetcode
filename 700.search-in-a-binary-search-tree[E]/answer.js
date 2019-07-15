/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
    while (root) {
        if (root && root.val > val) {
            root = root.left
        }
        if (root && root.val < val) {
            root = root.right
        }
        if (root && root.val === val) {
            return root
        }
    }

    return root
};