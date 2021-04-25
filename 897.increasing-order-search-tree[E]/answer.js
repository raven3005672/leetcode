/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function (root) {
  const res = [];
  inorder(root, res);

  const dummyNode = new TreeNode(-1);
  let currNode = dummyNode;
  for (const value of res) {
    currNode.right = new TreeNode(value);
    currNode = currNode.right;
  }
  return dummyNode.right;
};

const inorder = (node, res) => {
  if (!node) {
    return;
  }
  inorder(node.left, res);
  res.push(node.val);
  inorder(node.right, res);
}
