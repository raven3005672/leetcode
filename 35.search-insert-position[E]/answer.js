/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 测试用例
var nums = [1,3,4,12];
var target = 5;
var searchInsert = function(nums, target) {
    let result = nums.findIndex(e => e >= target);
    return result > -1 ? result : nums.length 
};
var searchInsert2 = function(nums, target) {
    return binary_search(nums, 0, nums.length, target);
}
// 二分方法 略