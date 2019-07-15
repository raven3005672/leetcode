/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let len = nums.length
    if (len < 2) {
        return;
    }
    if (k < 0) {
        return;
    }
    while (k--) {
        // 先出队再入队
        nums.unshift(nums.pop())  
    }
};
