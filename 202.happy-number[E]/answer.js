/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let arr = [];
    let result = 0;
    while(n) {
        if (n === 1) return true;
        while (n >= 10) {
            result += Math.pow(n % 10, 2)
            n = Math.floor(n / 10)
        }
        result += Math.pow(n, 2);
        if (result == 1) {
            return true;
        } else {
            if (arr.indexOf(result) > -1) {
                return false;
            }
            arr.push(result);
        }
        n = result;
        result = 0;
    }
};
