/**
 * @param {number} n
 * @return {string[]}
 */

// 动态规划方法
// dp[i]表示i组括号的所有有效组合
// dp[i] = "(dp[p]的所有有效组合) + dp[q]的组合"，其中1+p+q = i，p从0到i-1，q从i-1到0
var generateParenthesis = function(n) {
    let dp = [];
    dp[0] = [""];
    for (let i = 1; i < n + 1; i++) {
        dp[i] = [];
        for (let p = 0; p < i; p++) {
            let l1 = dp[p];
            let l2 = dp[i-1-p];
            for (k1 of l1) {
                for (k2 of l2) {
                    dp[i].push(`(${k1})${k2}`);
                }
            }
        }
    }
    return dp[n];
};

// dfs
var generateParenthesis1 = function(n) {
    let res = [];
    if (!n) return res;
    dfs("", 0, 0, n, res);
    return res;
}
// 当前递归得到的结果，左括号用了几个，右括号用了几个，一共需要用多少组，结果
var dfs = function(curStr, left, right, n, res) {
    if (left == n && right == n) {
        res.push(curStr);
        return;
    }
    // 剪枝
    if (left < right) {
        return;
    }
    if (left < n) {
        dfs(curStr + '(', left + 1, right, n, res);
    }
    if (right < n) {
        dfs(curStr + ')', left, right + 1, n, res);
    }
}
