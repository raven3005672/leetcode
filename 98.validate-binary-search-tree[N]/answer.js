/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    
};

// 递归：遍历整棵树
function isValidBST(root) {
    return helper(root, null, null);
}
function helper(node, lower, upper) {
    if (node == null) return true;
    let val = node.val;
    if (lower != null && val <= lower) return false;
    if (upper != null && val >= upper) return false;
    if (!helper(node.right, val, upper)) return false;
    if (!helper(node.left, lower, val)) return false;
    return true;
}

// 中序遍历
// 检查结果中每个元素是否小于下一个
function inorder(root) {
    let stack = [];
    let inorder = -Infinity;
    while (!stack.length || root != null) {
        while (root != null) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        if (root.val <= inorder) return false;
        inorder = root.val;
        root = root.right;
    }
    return true;
}
