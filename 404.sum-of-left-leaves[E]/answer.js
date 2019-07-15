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
var sumOfLeftLeaves = function(root) {
    let queue = [];
    queue.push(root);
    let result = 0;
    while(queue.length) {
        let current = queue.shift();
        if (!current) {
            return 0;
        }
        if (current.left) {
            queue.push(current.left);
            if (!current.left.left && !current.left.right) {
                result += current.left.val;
            }
        }
        if (current.right) {
            queue.push(current.right);
        }
    }
    return result;
};