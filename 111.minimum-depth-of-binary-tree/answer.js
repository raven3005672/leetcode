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
var minDepth = function(root) {
    let q = [root], deep = 0;
    while(q.length > 0 && root) {
        deep++;
        for (let i = 0, len = q.length; i < len; i++) {
            let n = q.shift();
            if (!n.left && !n.right) return deep;
            if (n.left) q.push(n.left);
            if (n.right) q.push(n.right);
        }
    }
    return deep;
};