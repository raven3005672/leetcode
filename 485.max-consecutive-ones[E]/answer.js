/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let result = [-1]
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            result.push(i);
        }
    }
    result.push(nums.length);
    let res = [];
    for (let j = 0; j < result.length - 1; j++) {
        let temp = result[j + 1] - result[j] - 1;
        res.push(temp)
    }
    return Math.max.apply(null, res);
};