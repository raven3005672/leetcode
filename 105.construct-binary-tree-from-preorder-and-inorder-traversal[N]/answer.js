/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (!preorder.length || !inorder.length) {
        return null;
    }
    let head = preorder[0];
    let pos = inorder.indexOf(head);
    let midLeft = inorder.slice(0, pos),
        midRight = inorder.slice(pos + 1);
    let preLeft = preorder.slice(1, pos + 1),
        preRight = preorder.slice(pos + 1);
    let tree = new TreeNode(head);
    tree.left = buildTree(preLeft, midLeft);
    tree.right = buildTree(preRight, midRight);
    return tree;
};