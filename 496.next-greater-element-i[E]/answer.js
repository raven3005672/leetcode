/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let result = [];
    for (let i = 0; i < nums1.length; i++) {
        let current = nums1[i];
        let j = nums2.indexOf(current) + 1;
        for (; j < nums2.length; j++) {
            if (nums2[j] > current) {
                result.push(nums2[j]);
                break;
            }
        }
        if (j == nums2.length) {
            result.push(-1)
        }
    }
    return result;
};