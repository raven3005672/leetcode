/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    var res = [];
    function dfs(root, n){
        if(!root) return;
        if(Object.prototype.toString.call(res[n]) !== '[object Array]'){
            res[n] = [];
        }
        res[n].push(root.val);
        dfs(root.left, n+1);
        dfs(root.right, n+1);
    }
    dfs(root, 0);
    for(var i=0;i<res.length;i++){
        var sum = 0;
        for(var j=0;j<res[i].length;j++){
            sum += res[i][j];
        }
        res[i] = sum/res[i].length;
    }
    return res;
};