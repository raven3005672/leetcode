/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let set = new Set(nums.sort((a,b) => {return b-a;}));
    let result = Array.from(set);
    if (result.length >= 3) {
        return result[2];
    } else {
        return result[0];
    }
};