/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    let r1 = false, r2 = false;
    if(root) {
        sum -= root.val;
        if(root.left) r1 = hasPathSum(root.left, sum);
        if(root.right) r2 = hasPathSum(root.right, sum);
        if(!root.left && !root.right && sum == 0) {
           return true;
        }
    }
    return r1 || r2;
};