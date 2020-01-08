/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 从后往前遍历数组，如果遇到的元素可以到达最后一行，则截断后面的元素，否则继续往前。若最后剩下的元素大于1个，则可以判断为假，否则为真。
var canJump = function(nums) {
    let n = 1;
    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] >= n) {
            n = 1;
        } else {
            n++;
        }
        if (i == 0 && n > 1) {
            return false;
        }
    }
    return true;
}




// 回溯法并不是一个好方法
// 下面这个写法的终止条件有很大问题
var canJump = function(nums) {
    let n = nums.length;
    let result = false;
    let tmpPath = [0];
    let backtrack = (tmpPath) => {
        let curIndex = tmpPath[tmpPath.length - 1];
        if (curIndex == n - 1) {
            return result = true;
        }
        for (let i = 1; i <= nums[curIndex]; i++) {
            if (!tmpPath.includes(curIndex + i)) {
                tmpPath.push(curIndex + i);
                backtrack(tmpPath.slice());
                tmpPath.pop();
            }
        }
    }
    backtrack(tmpPath);
    return result;
};
