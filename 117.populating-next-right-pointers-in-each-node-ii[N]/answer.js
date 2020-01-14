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
var connect = function(root) {
    if (!root) return null;
    let arr = [root];
    while(arr.length) {
        let tmp = [];
        for (let i = 0; i < arr.length; i++) {
            let curr = arr[i];
            curr.next = (i === 0 ? null : arr[i - 1]);
            curr.right && tmp.push(curr.right);
            curr.left && tmp.push(curr.left);
        }
        arr = tmp;
    }
    return root;
};