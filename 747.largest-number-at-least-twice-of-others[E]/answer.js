/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    if(nums.length === 1) return 0;
    var max = Math.max(...nums);
    var maxIdx = nums.indexOf(max);
    nums.sort((a,b)=>b-a);
    var second = nums[1];
    return max >= 2 * second ? maxIdx : -1;
};