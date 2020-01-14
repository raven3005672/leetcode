/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    let list = [];
    let inner = [];
    function pathSum(root, sum) {
        if (root == null) return list;
        sum -= root.val;
        inner.push(root.val);
        if (root.left == null && root.right == null) {
            if (sum == 0) {
                list.push(inner.slice());
            }
        }
        if (root.left != null) {
            pathSum(root.left, sum);
        }
        if (root.right != null) {
            pathSum(root.right, sum);
        }
        inner.pop();
        return list;
    }
    pathSum(root, sum);
    return list;
};

var pathSum = function(root, sum) {
    if (!root) return [];
    let result = [];
    let tmpPath = [root.val];
    let backtrack = (tmpPath, root) => {
        let curValue = tmpPath.reduce((pre, cur) => {
            return pre + cur;
        }, 0);
        if (curValue == sum && !root.left && !root.right) {
            result.push(tmpPath.slice());
        }
        if (root.left) {
            tmpPath.push(root.left.val);
            backtrack(tmpPath.slice(), root.left);
            tmpPath.pop();
        }
        if (root.right) {
            tmpPath.push(root.right.val);
            backtrack(tmpPath.slice(), root.right);
            tmpPath.pop();
        }
    }
    backtrack(tmpPath, root);
    return result;
};