/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function (root, L, R) {
  var res = 0;
  function dfs(root) {
    if (!root) return;
    if (root.val >= L && root.val <= R) {
      res += root.val;
    }
    dfs(root.left);
    dfs(root.right);
  }
  dfs(root);
  return res;
};

// dfs
var rangeSumBST = function (root, low, high) {
  if (!root) {
    return 0;
  }
  if (root.val > high) {
    return rangeSumBST(root.left, low, high);
  }
  if (root.val < low) {
    return rangeSumBST(root.right, low, high);
  }
  return root.val + rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high);
};

// bfs
var rangeSumBST = function (root, low, high) {
  let sum = 0;
  const q = [root];
  while (q.length) {
    const node = q.shift();
    if (!node) {
      continue;
    }
    if (node.val > high) {
      q.push(node.left);
    } else if (node.val < low) {
      q.push(node.right);
    } else {
      sum += node.val;
      q.push(node.left);
      q.push(node.right);
    }
  }
  return sum;
};
