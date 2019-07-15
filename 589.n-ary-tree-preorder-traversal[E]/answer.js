/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
    var res = [];
    function pre(root){
        if(!root) return;
        res.push(root.val);
        for(var i=0;root.children && i<root.children.length;i++){
            pre(root.children[i]);
        }
    }
    pre(root);
    return res;
};