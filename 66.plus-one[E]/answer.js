/**
 * @param {number[]} digits
 * @return {number[]}
 */
// 测试用例
var digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];
var plusOne = function(digits) {
    let result = [];
    for (let i = digits.length - 1; i >= 0; i--) {
        temp = digits[i] + 1;
        if (digits[i] + 1 > 9) {
            digits[i] = 0;
            if (i == 0) {
                result = [1]
            }
        } else {
            digits[i] += 1;
            break;
        }
    }
    return result.concat(digits);
};
