/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    //将nums进行升序操作，与原数组进行前后比较，找出索引差
    var arr = [...nums].sort((a,b)=>a-b);
    var l = 0;
    var r = 0;
    for(var i=0;i<arr.length;i++){
        if(arr[i] !== nums[i]){
            l = i;
            break;
        }
    }
    for(var j=nums.length-1;j>-1;j--){
        if(nums[j] !== arr[j]){
            r = j;
            break;
        }
    }
    if(l === 0 && r === 0){
        return 0;
    }
    return r - l + 1;
};