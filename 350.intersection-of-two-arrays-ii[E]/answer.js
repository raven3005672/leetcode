/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }
    let map = {};
    let ret = [];
    for (let val of nums1) {
        if (map[val]) {
            map[val]++;
        } else {
            map[val] = 1;
        }
    }
    for (let val of nums2) {
        if (map[val]) {
            ret.push(val);
            map[val]--;
        }
    }
    return ret;
};