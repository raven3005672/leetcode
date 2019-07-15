/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    var len = nums.length;
    var res = [];
    //不去重，最后两个测试用例就超时
    nums = [...new Set(nums)];
    for(var j = 1; j <= len; j++){
        if(!nums.includes(j)){
            res.push(j)
        }
    }
    return res;
};

// 思路：将所有正数作为数组下标，置对应数组值为负值。那么，仍为正数的位置即为（未出现过）消失的数字
var findDisappearedNumbers = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        nums[Math.abs(nums[i]) - 1] = -Math.abs(nums[Math.abs(nums[i]) - 1]);
    }
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            res.push(i+1);
        }
    }
    return res;
}
