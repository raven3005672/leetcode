/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    let sum = nums.reduce((a,b) => {return a+b}, 0);
    let min = Math.min.apply(null, nums);
    return sum - min * nums.length;
};