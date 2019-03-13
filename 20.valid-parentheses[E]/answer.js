/**
 * @param {string} s
 * @return {boolean}
 */
// 测试用例
var s = "()[{}]{}";
const left = ["(", "[", "{"],
    right = [")", "]", "}"];
var isValid = function(s) {
    let stack = [];
    let sArr = s.split('');
    if (sArr.length % 2 === 1) {
        return false;
    }
    for (let i = 0; i < sArr.length; i++) {
        if (left.includes(sArr[i])) {
            stack.push(sArr[i]);
        } else {
            let index = right.findIndex(rightCell => rightCell === sArr[i]);
            if (stack[stack.length - 1] === left[index]) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return !stack.length
};

console.log(isValid(s))