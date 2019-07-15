/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
    //将s的每一个节点与t进行比较
    function dfs(s){
        if(!s) return false;
        if(!isEqual(s, t)){
            return dfs(s.left) || dfs(s.right);
        }
        return true;
    }
    function isEqual(s, t){
        if(!s && !t) return true;
        if(!t || !s) return false;
        if(s.val !== t.val){
            return false;
        }
        return isEqual(s.left, t.left) && isEqual(s.right, t.right);
    }
    return dfs(s);
};