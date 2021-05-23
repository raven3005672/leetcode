/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {

  const seq1 = [];
  if (root1) {
    dfs(root1, seq1);
  }

  const seq2 = [];
  if (root2) {
    dfs(root2, seq2);
  }
  return seq1.toString() === seq2.toString();
};

const dfs = (node, seq) => {
  if (!node.left && !node.right) {
    seq.push(node.val);
  } else {
    if (node.left) {
      dfs(node.left, seq);
    }
    if (node.right) {
      dfs(node.right, seq);
    }
  }
}
