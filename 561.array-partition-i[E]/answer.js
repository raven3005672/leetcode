/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    var count = 0;
    nums.sort((a, b) => a - b).map((a, b) => {
        if (b % 2 == 0) {
            count += a;
        }
    });
    return count;
};