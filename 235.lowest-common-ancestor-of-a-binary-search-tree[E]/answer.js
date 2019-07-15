/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let res = null;
    function lca(root, p, q) {
        // p、q在root节点左右两侧
        if (root.val >= p.val && root.val <= q.val || root.val >= q.val && root.val <= p.val) {
            res = root;
        } else if (root.val < p.val && root.val < q.val) {
            lca(root.right, p, q)
        } else {
            lca(root.left, p, q)
        }
    }
    lca(root, p, q);
    return res;
};