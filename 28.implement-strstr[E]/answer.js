/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// 测试用例
var haystack = "hello";
var needle = "ll";
var strStr = function(haystack, needle) {
    let fLen = haystack.length;
    let nLen = needle.length;
    let result = -1;
    if (nLen > fLen) {
        return result;
    } else if (nLen == fLen) {
        result = haystack == needle ? 0 : -1;
        return result;
    } else {
        for (let i = 0; i < fLen - nLen + 1; i++) {
            result = haystack.slice(i, i+nLen) == needle ? i : -1;
            if (result > -1) {
                break;
            }
        }
    }
    return result;
};

// 直接indexOf
var strStr2 = function(haystack, needle) {
    return haystack.indexOf(needle);
}