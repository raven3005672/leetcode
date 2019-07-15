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
var longestUnivaluePath = function(root) {
    //计算每个节点左右节点值相同的个数和，取最大的即可
    var maxCount = 0;
    function dfs(root){
        if(!root) return;
        var leftCount = getLen(root.left, root.val, 0);
        var rightCount = getLen(root.right, root.val,0);
        maxCount = Math.max(maxCount, leftCount+rightCount);
        dfs(root.left);
        dfs(root.right);
    }
    function getLen(root, prev, count){
        if(!root) return count;
        if(root.val === prev){
            count++;
            return Math.max(getLen(root.left, root.val, count), getLen(root.right, root.val, count));
        }else{
            return count;
        }
    }
    dfs(root);
    return maxCount;
};