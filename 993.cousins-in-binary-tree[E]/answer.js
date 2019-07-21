/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    var xparent,yparent,xdep,ydep;
    function dfs(root, dep, parent){
        if(!root) return;
        if(root.val === x){
            xparent = parent;
            xdep = dep;
        }else if(root.val === y){
            yparent = parent;
            ydep = dep;
        }else{
            dfs(root.left, dep+1, root.val);
            dfs(root.right, dep+1, root.val);
        }
    }
    dfs(root.left, 1, root.val);
    dfs(root.right, 1, root.val);
    return (xparent !== yparent) && (xdep === ydep);
};