/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if (!root) return null;
    let stack = [];
    stack.push(root);
    let result = root;
    let pre = root, cur;
    while (stack.length) {
        cur = stack.pop();
        if (pre != cur) {
            pre.right = cur;
        }
        if (cur.right) {
            stack.push(cur.right);
        }
        if (cur.left) {
            stack.push(cur.left);
        }
        cur.left = null;
        pre = cur;
    }
    return result;
};