/**
 * @param {number} x
 * @return {boolean}
 */
// 测试用例
var x = 121;
var isPalindrome = function(x) {
    let strX = x.toString(10),
        length = strX.length,
        result = true;
    if (strX[0] == '-' || (strX[length - 1] == 0) && x != 0) {
        result = false;
    } else {
        for (let i = 0; i < Math.floor(length / 2); i++) {
            result = result && (strX[i] === strX[length - i - 1]);
        }
    }
    return result;
};
console.log(isPalindrome(x))
// 数字解法参考数字回文问题、只翻转一半数字并与另一半做比较即可