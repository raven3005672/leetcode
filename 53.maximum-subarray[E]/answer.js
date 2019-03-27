/**
 * @param {number[]} nums
 * @return {number}
 */
// 测试用例
var nums = [-2,1,-3,4,-1,2,1,-5,4];
var maxSubArray = function(nums) {
    let sum = nums[0];
    let now = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        if (now < 0) {
            now = nums[i];
        } else {
            now = now + nums[i];
        }
        
        if(now > sum) {
            sum = now;
        }
    }
    return sum;
    
}

console.log(maxSubArray(nums))

// 扫描法，时间复杂度O(n)
// 核心思想是，当加上一个正数时，和会增加；当加上一个负数时，和会减少。
// 所以在数组遍历的过程中，一边累加数组元素，一边比较累加结果和0的关系，如果累加结果是负数，则应当把累加结果抛弃，并将累加结果清零。
