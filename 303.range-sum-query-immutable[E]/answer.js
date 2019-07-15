/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.nums = nums;
    this.sum = {};
    for (let i = 0; i < nums.length; i++) {
        this.sum[i] = this.sum[i - 1] ? this.sum[i - 1] + nums[i] : nums[i];
    }
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return this.sum[j] - (this.sum[i - 1] ? this.sum[i - 1] : 0);
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */