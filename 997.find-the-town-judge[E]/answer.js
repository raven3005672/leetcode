/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(N, trust) {
    // 信任分组
    let trustTemp = new Array(N + 1).fill(0);
    // 被信任分组
    let beTrustTemp = new Array(N + 1).fill(0);
    trust.forEach(item => {
        trustTemp[item[0]]++;
        beTrustTemp[item[1]]++;
    });
    for(let i = 1; i <= N; i++) {
        if (trustTemp[i] === 0 && beTrustTemp[i] + 1 === N) {
            return i;
        }
    }
    return -1;
};