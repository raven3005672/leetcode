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
var findSecondMinimumValue = function(root) {
    //递归与根节点值判断
    function dfs(root, res){
        if(!root) return -1;
        if(root.val > res) return root.val;
        var left = dfs(root.left, res);
        var right = dfs(root.right, res);
        if(left === -1 && right === -1) return -1;
        if(left === -1) return right;
        if(right === -1) return left;
        return Math.min(left, right);
    }
    return dfs(root, root.val);
    //将二叉树节点值存储到数组中再进行判断
    /*var arr = [];
    function dfs(root){
        if(!root) return;
        arr.push(root.val);
        dfs(root.left);
        dfs(root.right);
    }
    dfs(root);
    var res = [...new Set(arr)];
    if(res.length <= 1){
        return -1;
    }
    res.sort((a,b)=>a-b);
    return res[1];*/
};