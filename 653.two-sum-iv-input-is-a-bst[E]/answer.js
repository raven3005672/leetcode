/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    var arr = [];
    function dfs(root){
        if(!root) return;
        arr.push(root.val);
        dfs(root.left);
        dfs(root.right);
    }
    dfs(root);
    for(var i=0;i<arr.length-1;i++){
        for(var j=i+1;j<arr.length;j++){
            if(arr[i] + arr[j] === k){
                return true;
            }
        }
    }
    return false;
};