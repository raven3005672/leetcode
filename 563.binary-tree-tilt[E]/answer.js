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
var findTilt = function(root) {
    //计算所有节点的左右子节点绝对值之和
    var res = 0;
    //节点的值之和
    function dfs(root){
        if(!root) return 0;
        return dfs(root.left) + root.val + dfs(root.right);
    }
    //节点坡度
    function nodeVal(root){
        return Math.abs(dfs(root.left)-dfs(root.right));
    }
    //累加所有节点坡度
    function getRes(root){
        if(!root) return;
        var temp = nodeVal(root);
        res += temp;
        getRes(root.left);
        getRes(root.right);
    }
    getRes(root);
    return res;
};