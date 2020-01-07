/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// 递归回溯
var combinationSum = function(candidates, target) {
    let len = candidates.length;
    let res = [];
    let tmpPath = [];
    // 排序这一步为了剪枝
    candidates = candidates.sort((a,b) => a - b);
    let backtrack = (tmpPath, target, start) => {
        if (target < 0) return;
        if (target == 0) {
            res.push(tmpPath);
            return;
        }
        for (let i = start; i < len; i++) {
            tmpPath.push(candidates[i]);
            backtrack(tmpPath.slice(), target - candidates[i], i);
            tmpPath.pop();
        }
    }
    backtrack(tmpPath, target, 0);
    return res;
};
