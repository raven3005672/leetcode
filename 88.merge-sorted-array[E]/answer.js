/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// 测试用例
var nums1 = [1,2,3,0,0,0]
var m = 3
var nums2 = [2,5,6]
var n = 3
var merge = function(nums1, m, nums2, n) {
    nums1.splice(m,n,...nums2); 
    nums1.sort((r1,r2)=>r1-r2)
};
