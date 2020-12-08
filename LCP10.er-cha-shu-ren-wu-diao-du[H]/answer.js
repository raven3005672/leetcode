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
var minimalExecTime = function(root) {
  let p = DFS(root);
  return p[0] - p[1];
};

function DFS(root) {
  if (!root) return [0, 0];
  let l = DFS(root.left);
  let r = DFS(root.right);
  let a = l[0], c = r[0];
  let b = l[1], d = r[1];
  let tot = a + c + root.val;
  if ((c - 2 * d <= a && a <= c) || (a - 2 * b <= c && c <= a)) {
    return [tot, (a+c)/2];
  }
  if (a - 2 * b > c) {
    return [tot, b + c];
  } else {
    // c - 2 * d > a
    return [tot, a + d];
  }
}
