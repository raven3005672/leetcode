/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
// 基础回溯，大数据量会超时
var getPermutation = function(n, k) {
    let arrs = Array.from({length: n}, (v,k) => k+1);
    let result = [];
    let tmpPath = [];
    let backtrack = (tmpPath) => {
        if (tmpPath.length == n) {
            result.push(tmpPath.join(''));
            return true;
        }
        for (let i = 0; i < n; i++) {
            if (!tmpPath.includes(arrs[i])) {
                tmpPath.push(arrs[i]);
                backtrack(tmpPath);
                tmpPath.pop();
            }
        }
    }
    backtrack(tmpPath);
    return result[k - 1]
};

// 数学分析
// 假设n=5,k=35,
// n为5的全排列就是首位为1-5的如下排列的所有
// 1_,,,2,,,3,,,4,,,5,,,每个各有24个排列，组成12345的全排列
// 由于k=35<48,也就是说第35个肯定在首位为2的全排列里边,所以第一个取2。
// 接下来就是考虑剩下1345这四个数的全排列里边取第k=35-24=11个，
// 1,,3,,4,,5,,每个各有6个排列，组成1345的全排列，
// 由于k=11<12,也就是说第11个肯定在首位为3的全排列里边，所以第二个数取3
// 接下来就是考虑剩下145这三个数的全排列里边取第k=11-6=5个，
// 1,4,5,_每个各有2个排列，组成145的全排列
// 由于k=5<6,也就是说第5个肯定在首位为5的全排列里边，所以第三个数取5
// 接下来就是考虑剩下14这两个数的排列里边取第k=5-4=1个
// 1_4_每个各有1个排列，组成14的排列，
// 由于k=1,所以第四个数取1
// 最后加上剩下的最后一个4，结果就是23514
// 结束。

var getPermutation = function(n, k) {
    let nums = Array.from({length: n}, (v,k) => k+1);
    let answer = '';
    let interval, loop_times = n;
    for (let i = 0; i < loop_times; i++) {
        n--;
        interval = ~~((k - 1) / factorial(n));
        answer += nums[interval];
        nums.splice(interval, 1);
        k -= interval * factorial(n);
    }
    return answer;
}

var factorial = function(x) {
    let f = 1;
    for (let i = 1; i <= x; i++) {
        f *= i;
    }
    return f;
}
