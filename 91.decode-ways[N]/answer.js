/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if (s.indexOf('0') == 0) return 0;
    let m = s.length;
    if (m <= 1) return 1;
    let dp = [];
    dp[0] = 1;
    dp[1] = 1;
    let temp1 = void 0;
    let temp2 = void 0;
    for (let i = 2; i <= m; i++) {
        temp1 = +s.charAt(i - 1);
        temp2 = +s.slice(i - 2, i);
        if (temp1 == 0) {
            if (temp2 >= 10 && temp2 <= 26) {
                dp[i] = dp[i - 2];
            } else {
                return 0;
            }
        } else {
            if (temp2 >= 10 && temp2 <= 26) {
                dp[i] = dp[i - 1] + dp[i - 2];
            } else if (temp2 != 0) {
                dp[i] = dp[i - 1];
            } else if (temp2 == 0) {
                return 0;
            }
        }
    }
    return dp[m]
};
