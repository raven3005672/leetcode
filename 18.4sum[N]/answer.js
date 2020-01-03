/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a, b) => a - b);
    let temp = 0;
    let map = {};
    let result = [];
    // 标记一个目标值，扣掉之后变成三数和问题
    for (let i = 0; i < nums.length; i++) {
        let nTarget = nums[i] - target;
        for (let j = i + 1; j < nums.length; j++) {
            let p = j - 1; q = j + 1;
            while(p >= 0 && q <= nums.length - 1) {
                if (p == i) {
                    p--;
                } else if (q == i) {
                    q++;
                } else {
                    temp = nums[p] + nums[j] + nums[q] + nTarget;
                    if (temp > 0) {
                        p--;
                    } else if (temp < 0) {
                        q++;
                    } else {
                        let key = [nums[p],nums[i],nums[j],nums[q]].sort();
                        if (!map[key.join('x')]) {
                            map[key.join('x')] = true
                            result.push(key);
                        }
                        p--;
                        q++;
                    }
                }
            }
        }
    }
    return result;
};
