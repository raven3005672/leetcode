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
var getMinimumDifference = function(root) {
  let ans = Infinity, pre = -1;
  const dfs = (root) => {
    if (root === null) {
      return;
    }
    dfs(root.left);
    if (pre === -1) {
      pre = root.val;
    } else {
      ans = Math.min(ans, root.val - pre);
      pre = root.val;
    }
    dfs(root.right);
  }
  dfs(root);
  return ans;
};

/*
 * 思路
 * 考虑对升序数组，求任意两个元素之差的绝对值的最小值，答案已定位相邻两个元素之差的最小值。
 * 其他任意间隔距离大于等于2的元素之差一定大于距离更近的元素之差。
 * 二叉搜索树的性质 => 二叉搜索树的中序遍历得到的值序列是递增有序的。
 */
