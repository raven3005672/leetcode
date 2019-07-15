/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function(root) {
    function helper(root, obj) {
        if (root == null) {
            return;
        }
        helper(root.right, obj);
        const {val} = root;
        root.val += obj.sum;
        obj.sum += val;
        helper(root.left, obj);
    }
    helper(root, {sum: 0});
    return root;
};