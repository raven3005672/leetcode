/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if (root == null) {return []};
    let result = [], queue = [];
    queue.push({node: root, dep: 1});
    while(queue.length) {
        let current = queue.shift();
        if (current.node !== null) {
            if (current.dep > result.length) {
                result.unshift([current.node.val])
            } else {
                result[0].push(current.node.val)
            }
        }
        if (current.node.left !== null) {
            queue.push({node: current.node.left, dep: current.dep + 1})
        }
        if (current.node.right !== null) {
            queue.push({node: current.node.right, dep: current.dep + 1})
        }
    }
    return result;
};
