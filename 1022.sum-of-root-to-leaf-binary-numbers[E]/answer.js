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
var sumRootToLeaf = function(root) {
    //每遍历一层则为2的倍数，当遇到叶子节点则叠加sum
    var sum = 0;
    function dfs(root, currentVal){
        if(!root) return;
        currentVal = currentVal * 2 + root.val;
        if(!root.left && !root.right){
            sum += currentVal;
            return;
        }
        if(root.left) dfs(root.left, currentVal);
        if(root.right) dfs(root.right, currentVal);
    }
    dfs(root, 0);
    return sum;
};