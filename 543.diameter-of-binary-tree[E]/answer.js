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
var diameterOfBinaryTree = function(root) {
    var max = 0;
    //计算每个节点的直径
    function nodeDep(root){
        if(!root) return 0;
        var left = dfs(root.left);
        var right = dfs(root.right);
        max = Math.max(max, left+right+1);
        nodeDep(root.left);
        nodeDep(root.right);
        return max-1;
    }
    //树的最大深度
    function dfs(root){
        if(!root) return 0;
        var l = dfs(root.left);
        var r = dfs(root.right);
        return Math.max(l, r) + 1;
    }
    return nodeDep(root);
};