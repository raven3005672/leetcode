/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    //双指针
    if(nums.length === 0) return 0;
    if(nums.length === 1) return 1;
    var res = 1;
    var count = 1;
    for(var i=0,j=1;i<nums.length-1&&j<nums.length;){
        if(nums[i] < nums[j]){
            i++;
            j++;
            count++;
        }else{
            res = Math.max(count, res);
            count = 1;
            i = j;
            j = i+1;
        }
    }
    return Math.max(count, res);
};