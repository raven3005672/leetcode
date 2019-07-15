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
var postorder = function(root) {
    var res = [];
    function post(root){
        if(!root) return;
        if(root.children){
            for(var i=0;i<root.children.length;i++){
                post(root.children[i]);
            }
        }
        res.push(root.val);
        
    }
    post(root);
    return res;
};