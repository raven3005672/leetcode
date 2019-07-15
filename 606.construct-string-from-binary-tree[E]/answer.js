/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function(t) {
    var res = '';
    function dfs(root){
        if(!root) return;
        res += root.val;
        if(!root.left && root.right){
            res += '()';
            res += '(';
            dfs(root.right);
            res += ')';
        }else if(root.left && !root.right){
            res += '(';
            dfs(root.left);
            res += ')';
        }else if(root.left && root.right){
            res += '(';
            dfs(root.left);
            res += ')';
            res += '(';
            dfs(root.right);
            res += ')';
        }
    }
    dfs(t);
    return res;
};