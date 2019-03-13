/**
 * @param {string[]} strs
 * @return {string}
 */
// 测试用例
var strs = ["flower","flow","flight"];
var longestCommonPrefix = function(strs) {
    let result = "",
        shortestStr = "",
        currentLength = -1;
    for (let i = 0; i < strs.length; i++) {
        if (currentLength < 0) {
            currentLength = strs[i].length;
            shortestStr = strs[i]
        } else {
            if (currentLength > strs[i].length) {
                currentLength = strs[i].length;
                shortestStr = strs[i]
            }
        }
    }
    let shortLength = shortestStr.length;
    for (let j = 0; j < shortLength; j++ ) {
        let check = strs.reduce((left, right) => left && right.startsWith(shortestStr.slice(0, shortLength - j)), true)

        if (check) {
            result = shortestStr.slice(0, shortLength - j);
            break;
        }
    }

    return result;
};

console.log(longestCommonPrefix(strs));
// 水平扫描法
// 分治【分输入数组】
// 两组取最长，再把两个结果取最长
// 二分查找【分最长输入】
// 半边满足则再加四分之一长度判断，不满足则减四分之一长度判断，以此类推
// 最后合并汇总
