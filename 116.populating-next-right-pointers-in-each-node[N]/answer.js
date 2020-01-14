/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
// 向中间集中的思路，画图比较好懂
var connect = function(root) {
    if (!root) return root;
    let left = root.left;
    let right = root.right;
    while (left) {
        left.next = right;
        left = left.right;
        right = right.left;
    }
    connect(root.left);
    connect(root.right);
    return root;
};

var connect = function(root) {
    function helper(root) {
        if (!root || !root.left) {
            return;
        }
        root.left.next = root.right;
        if (root.next) {
            root.right.next = root.next.left;
        }
        helper(root.left);
        helper(root.right);
    }
    helper(root);
    return root;
};