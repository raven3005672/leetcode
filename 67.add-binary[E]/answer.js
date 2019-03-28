/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
// 测试用例
var a = "1010"
var b = "1011"
var addBinary = function(a, b) {
    let fillZero = Math.abs(b.length - a.length),
        arrA = (b.length > a.length ? '0'.repeat(fillZero) + a : a).split('').map(Number),
        arrB = (a.length > b.length ? '0'.repeat(fillZero) + b : b).split('').map(Number),
        result = [],
        addFlag = 0;
    for (let i = arrA.length - 1; i >= 0; i--) {
        let temp = arrA[i] + arrB[i] + addFlag;
        if (temp > 1) {
            temp = temp % 2;
            addFlag = 1;
        } else {
            addFlag = 0
        }
        result.unshift(temp);
    }
    if (addFlag) {
        result.unshift(addFlag);
    }
    return result.join('')
};

console.log(addBinary(a,b))