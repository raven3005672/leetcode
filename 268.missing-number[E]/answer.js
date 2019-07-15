/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    if (nums.length == 1) {
        if (nums[0] == 0) return 1;
        if (nums[0] == 1) return 0;
    }
    let arr = nums.sort((a,b) => {return a - b});
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== i) {
            return i;
        }
    }
    return arr.length;
};

// 思路：求和，做减
var missingNumber = function(nums) {
    let n = nums.length;
    let sum1 = (1 + n) * n / 2;
    let sum2 = nums.reduce((a,b) => {
        return a + b
    }, 0)
    return sum1 - sum2;
}