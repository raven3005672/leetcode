/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let len = candidates.length;
    let result = [];
    let tmpPath = [];
    candidates.sort((a,b) => a-b);
    let backtrack = (tmpPath, target, start) => {
        if (target < 0) return;
        if (target == 0) {
            result.push(tmpPath);
            return;
        }
        for (let i = start; i < len; i++) {
            if (target < candidates[i]) break;
            // 不能重复当前元素，那么利用排序，将相邻两个相同的元素只取前一个去组合，当前直接跳过，直接进入下一个元素进行组合。
            if (i > start && candidates[i - 1] == candidates[i]) continue;
            tmpPath.push(candidates[i]);
            // 不同于39，不能重复使用，所以传递变量i+1
            backtrack(tmpPath.slice(), target - candidates[i], i + 1);
            tmpPath.pop();
        }
    }
    backtrack(tmpPath, target, 0);
    return result;
};