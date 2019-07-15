/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
    if (n < 10) {
        return n;       // step1
    }
    let length = 0,
        cnt = 9,
        i = 1;
    for (;length + cnt * i < n; ++i) {      // step2
        length += cnt * i;
        cnt *= 10;
    }   // step3
    let num = Math.pow(10, i - 1) + (n - length - 1) / i + '';
    let index = (n - length - 1) % i;
    return num[index];
};

// 思路
// 主要分为两部分。首先计算前缀部分，再计算尾部。
// 小于10，直接返回（step1）
// 否则，计算前缀部分，全部被占用部分总共有多少位即length（step2）
// 计算尾部，其一、计算第一个数字即pow(10, i-1)。其二、推理出最后一个出现的多位数字即num，并计算出位于第几位即index（step3）
// 1    [1,9]           9
// 2    [10,99]         90
// 3    [100,999]       900
// 4    [1000,9999]     9000
// 2^31-1=2147483647


console.log(findNthDigit(12))