/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    if (N == 0) return 0;
    let last = 0;
    let result = 1;
    for (let i = 2; i <= N; i++) {
        let tmp = result;
        result = result + last;
        last = tmp;
    }
    return result;
};