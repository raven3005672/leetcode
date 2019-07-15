/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num) {
    let res = [];
    // 判断1的个数，位运算
    let countOne = function(hour, min) {
        let count = 0;
        while (hour) {
            if (hour & 1) {
                count++;
            }
            hour = hour >> 1;
        }
        while (min) {
            if (min & 1) {
                count++;
            }
            min = min >> 1;
        }
        return count;
    }
    // 遍历
    for (let i = 0; i < 12; i++) {
        for (let j = 0; j < 60; j++) {
            // 如果1的个数等于num
            if (countOne(i, j) === num) {
                // 格式化输出
                res.push(i + ':' + (j < 10 ? ('0' + j): j));
            } 
        }
    }
    return res;
};