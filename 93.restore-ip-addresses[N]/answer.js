/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    let ip = '';
    let n = 0;
    let res = [];
    let backtrack = (s, n, ip) => {
        if (n == 4) {
            if (s.length == 0) {
                res.push(ip);
            }
        } else {
            for (let k = 1; k < 4; k++) {
                if (s.length < k) {
                    break;
                }
                let val = parseInt(s.slice(0,k), 10);
                if (val > 255 || k != String(val).length) {
                    continue;
                }
                backtrack(s.slice(k), n+1, ip+s.slice(0,k)+(n==3?'':'.'));
            }
        }
    }
    backtrack(s, n, ip);
    return res;
};
