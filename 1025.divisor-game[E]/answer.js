/**
 * @param {number} N
 * @return {boolean}
 */
var divisorGame = function(N) {
    //经过推算，N为奇数爱丽丝必输，只有当N为偶数才会赢
    return N % 2 === 0;
};