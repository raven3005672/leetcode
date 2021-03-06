/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    while (b != 0) {
        let sum = a ^ b;
        let carry = (a & b) << 1;
        a = sum;
        b = carry;
    }
    return a;
};

// 整数位运算
