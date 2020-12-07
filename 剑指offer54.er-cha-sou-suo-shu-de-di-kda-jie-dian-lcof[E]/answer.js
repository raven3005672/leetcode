/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
  // 反中序遍历，记录数值到数组，获取第k -1 个
  let setArray = []
  const dfs = function (node) {
    if (node === null) {
      return
    }
    dfs(node.right)
    setArray.push(node.val)
    dfs(node.left)
  }
  dfs(root)
  return setArray[k - 1]
};

/**
 * 思路：中序遍历
 * 中序遍历即为递增排列
 * 时间复杂度：O(n)，空间复杂度：O(n)
 */
