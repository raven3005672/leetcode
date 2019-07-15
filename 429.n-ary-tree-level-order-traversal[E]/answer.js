/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const queue = [[root, 0]];
    const result = [];
    while(queue.length) {
        const [current, depth] = queue.shift();
        if(!current) continue;

        const {val, children} = current;
        if(result[depth] === undefined) {
            result[depth] = [val];
        } else {
            result[depth].push(val);
        }

        queue.push(...children.map(item => [item, depth + 1]));
    }
    return result;
};