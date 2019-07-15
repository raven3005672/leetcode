/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    //将数组元素存储至map中，再通过相邻key进行判断
    var map = new Map();
    for(var i=0;i<nums.length;i++){
        if(map.has(nums[i])){
            map.set(nums[i], map.get(nums[i])+1);
        }else{
            map.set(nums[i], 1);
        }
    }
    var res = 0;
    var temp = 0;
    for(var j of map.keys()){
        if(map.has(j+1)){
            temp = map.get(j) + map.get(j+1);
        }
        res = Math.max(res, temp);
    }
    return res;
};