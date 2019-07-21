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
var minDiffInBST = function(root) {
    var arr = [];
    function dfs(root){
        if(!root) return;
        arr.push(root.val);
        dfs(root.left);
        dfs(root.right);
    }
    dfs(root);
    arr.sort((a,b)=>a-b);
    var res = Number.MAX_SAFE_INTEGER;
    for(var i=1;i<arr.length;i++){
        res = Math.min(res, arr[i] - arr[i-1]);
    }
    return res;
};