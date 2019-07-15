/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let len = nums.length;
    let map = {};
    // 转字典
    for (let i = 0; i < len; i++) {
        let item = nums[i];
        if (!map[item]) {
            map[item] = [i];
        } else {
            map[item].push(i);
        }
    }
    
    //遍历字典
    for (const key in map) {
        let list = map[key];
        let subLen = list.length;
        if (subLen>1) {
            for (let i = 0; i < subLen-1; i++) {
                for (let j = i+1; j < subLen; j++) {
                    if(Math.abs(list[i] - list[j]) <= k ){
                        return true;
                    }
                }
            }
        }
    }

    return false;
};
