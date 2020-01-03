/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (s.length <= 2) return s;
    if (numRows == 1) return s;
    let result = Array.from({length: numRows}, () => []);
    let stock = 0;
    let flag = true;
    for (let i = 0; i < s.length; i++) {
        result[stock].push(s.charAt(i));
        if (flag) {
            if (stock + 1 == numRows) {
                stock--;
                flag = false;
            } else {
                stock++;
            }
        } else {
            if (stock == 0) {
                stock++;
                flag = true;
            } else {
                stock--;
            }
        }
    }
    return result.map(v => v.join('')).join('')
};


var convert = function (s, numRows) {
    if (numRows < 2) return s; //不需要折返的情形
    let r = Array(numRows).fill(""), //初始化numRows个字串
        c = (numRows - 1) * 2; //Z字单个循环长度
    //按z字折返规律把每个字符组装到对应的行里
    s.split("").forEach((l, i) => r[i % c < numRows ? i % c : c - i % c] += l);
    //拼合所有行
    return r.join("");
};
