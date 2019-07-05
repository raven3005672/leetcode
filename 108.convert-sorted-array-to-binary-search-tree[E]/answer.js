/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums, left = 0, right = nums.length) {
    if (left >= right) {
        return null
    }
    let mid = (left + right) >> 1;
    let tn = new TreeNode(nums[mid]);
    tn.left = sortedArrayToBST(nums, left, mid);
    tn.right = sortedArrayToBST(nums, mid + 1, right);
    return tn;
};