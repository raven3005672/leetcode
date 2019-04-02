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
var maxDepth = function(root) {
    let depth = 0,
        stack = [],
        depthArr = [];
    if (root == null) {return depth}
    stack.push({node: root, dep: 1});
    while(stack.length) {
        let current = stack.pop();
        if (current.node.left) {
            stack.push({node: current.node.left, dep: current.dep + 1})
        }
        if (current.node.right) {
            stack.push({node: current.node.right, dep: current.dep + 1})
        }
        if (current.node.left == null && current.node.right == null) {
            depthArr.push(current.dep);
        }
    }
    return Math.max(...depthArr)
};

// 栈解法：深度优先搜索，栈的最大长度就是树的最大深度
