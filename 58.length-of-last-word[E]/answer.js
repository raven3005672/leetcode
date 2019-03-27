/**
 * @param {string} s
 * @return {number}
 */
// 测试用例
var s = "hello world ";
var lengthOfLastWord = function(s) {
    let arr = s.split(' '),
        maybeS = arr.reverse().find(item => item.length);

    return maybeS ? maybeS.length : 0
};

console.log(lengthOfLastWord(s))