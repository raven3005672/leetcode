/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
    let result = 0;
    let map = {};
    for (a of A) {
        for (b of B) {
            if (map[a+b]) {
                map[a+b]++;
            } else {
                map[a+b] = 1;
            }
        }
    }
    for (c of C) {
        for (d of D) {
            let s = -(c+d);
            if (s in map) {
                result += map[s]
            }
        }
    }
    return result
};
