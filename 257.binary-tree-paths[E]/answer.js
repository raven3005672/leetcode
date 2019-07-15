/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    if (root == null) {
        return [];
    }
    var res = [];
    var dfs = function (node, result) {
        if (node.left == null && node.right == null) {
            res.push(result + node.val);
        }
        if (node.left !== null) {
            dfs(node.left, result + node.val + '->');
        }
        if (node.right !== null){
            dfs(node.right, result + node.val + '->');
        }
    }
    dfs(root, '');
    return res;
};