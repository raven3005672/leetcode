/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if (!inorder.length || !postorder.length) {
        return null;
    }
    let head = postorder[postorder.length - 1];
    let pos = inorder.indexOf(head);
    let midLeft = inorder.slice(0, pos),
        midRight = inorder.slice(pos + 1);
    let postLeft = postorder.slice(0, midLeft.length),
        postRight = postorder.slice(midLeft.length, -1)
    let tree = new TreeNode(head);
    tree.right = buildTree(midRight, postRight);
    tree.left = buildTree(midLeft, postLeft);
    return tree;
};