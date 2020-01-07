/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // 就是先寻找排序数组，再分情况查找
    var left = 0,right = nums.length - 1;
    while(left<=right){
        var mid = ~~((left+right)/2);
        if(nums[mid] === target) return mid;
        
        // mid 左侧是排好序的
        if(nums[mid]>=nums[left]){
            if(nums[mid]>target && target>=nums[left]){
                right = mid - 1;
            }else{
                left = mid + 1;
            }
        }else{
            if(nums[mid]<target && target <=nums[right]){
                left = mid + 1;
            }else{
                right = mid - 1; 
            }
        }
    }
    return -1;
};
