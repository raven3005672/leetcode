/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if (!root) return '[]';
    let res = [];
    let queue = [root];
    while(queue.length > 0) {
        let node = queue.shift();
        if (node) {
            res.push(node.val);
            queue.push(node.left);
            queue.push(node.right);
        } else {
            res.push(null);
        }
    }
    return JSON.stringify(res)

};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    data = JSON.parse(data);
    if (data.length === 0 || data[0] === null) {
        return null;
    }
    let root = new TreeNode(data[0]);
    let queue = [root];
    let index = 1;
    while (queue.length > 0) {
        let node = queue.shift();
        if (node) {
            if (data[index] !== null) {
                node.left = new TreeNode(data[index]);
                queue.push(node.left);
            }
            if (data[index + 1] !== null) {
                node.right = new TreeNode(data[index + 1]);
                queue.push(node.right);
            }
            index += 2;
        }
    }
    return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */