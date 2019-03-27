/**
 * @param {number} n
 * @return {string}
 */
// 测试用例
var n = 1;
// 递归1
var countAndSay = function(n) {
    if (n == 1) {
        return "1";
    } else {
        let before = countAndSay(n-1).split('');
        let i = 0;
        let result = [];
        
        while(i < before.length) {
            let a = i,
                b = before.findIndex((value, key) => {
                    return value !== before[i] && key >= a;
                });
            b = b === -1 ? before.length : b;
            result.push((b-a).toString());
            result.push(before[i]);
            i = b;
        }
        return result.join('');
    }
};

// 递归2
var countAndSay = function(n) {
    if(n == 1) {
        return "1"
    } else {
        let str = countAndSay(n-1);
        let count = 1;
        let res = "";
        for (let i = 0; i < str.length; i++) {
            if (str[i] == str[i+1]) {
                count ++
            } else {
                res = res + count + str[i]
                count = 1
            }
        }
        return res
    }
 }

console.log(countAndSay(5))
