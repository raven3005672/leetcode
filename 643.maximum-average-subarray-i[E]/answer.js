/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    var maxSum = nums.slice(0, k).reduce((x, y) => x+y, 0);
    var temp = maxSum;
    for(var i=0,len=nums.length;i<len-k;i++){
        temp = temp + nums[k+i] - nums[i]
        maxSum = Math.max(maxSum, temp);
    }
    return maxSum/k;
};