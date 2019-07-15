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
var getMinimumDifference = function(root) {
    let treeArr = [];
    let lastTree;
    let res = Infinity;
    while(root || treeArr.length){
        while(root){
            treeArr.push(root);
            root = root.left;
        }
        if(treeArr.length){
            root = treeArr.pop();
            if(lastTree != undefined) res = Math.min(res,root.val - lastTree);
            lastTree = root.val;
            root = root.right;
        }
    }
    return res;
};