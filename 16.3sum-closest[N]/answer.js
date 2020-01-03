/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a,b) => a-b);
    let result = 0;
    let temp = 0;
    let distance = Infinity;
    for (let i = 1; i < nums.length - 1; i++) {
        let j = i - 1, k = i + 1;
        while(j >= 0 && k <= nums.length - 1) {
            temp = nums[j] + nums[i] + nums[k] - target;
            if (Math.abs(temp) < distance) {
                distance = Math.abs(temp);
                result = temp + target;
            }
            if (temp > 0) {
                j--;
            } else if (temp < 0) {
                k++;
            } else {
                return target;
            }
        }
    }

    return result;
};
