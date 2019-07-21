/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    function dfs(root, arr){
        if(!root) return;
        if(!root.left && !root.right){
            arr.push(root.val);
        }
        dfs(root.left, arr);
        dfs(root.right, arr);
    }
    var arr1 = [];
    var arr2 = [];
    dfs(root1, arr1);
    dfs(root2, arr2);
    return arr1.join('') === arr2.join('');
};