/**
 * @param {string} s
 * @return {number}
 */
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// 测试用例
var s = "MCMXCIV";
var romanToInt = function(s) {
    let singleKeys = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    let combineKeys = {
        IV: 4,
        IX: 9,
        XL: 40,
        XC: 90,
        CD: 400,
        CM: 900
    };
    let result = 0;
    let sArr = s.split(''),
        length = sArr.length;
    // 双字母查询写法
    for (let i = length - 1; i >= 0; i--) {
        if (sArr[i] && sArr[i - 1] && combineKeys[sArr[i - 1] + sArr[i]]) {
            result +=  combineKeys[sArr[i - 1] + sArr[i]];
            i--;
        } else {
            result += singleKeys[sArr[i]];
        }
    }
    // 单字母前后判断写法
    // for (let i = 0; i < length; i++) {
    //     if (sArr[i + 1] && (singleKeys[sArr[i]] < singleKeys[sArr[i + 1]])) {
    //         result -= singleKeys[sArr[i]]
    //     } else {
    //         result += singleKeys[sArr[i]]
    //     }
    // }
    return result;
};

console.log(romanToInt(s));