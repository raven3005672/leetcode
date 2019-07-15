/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let map = {};
    for (let k of s) {
        if (map[k]) {
            map[k]++;
        } else {
            map[k] = 1;
        }
    }
    let result = 0;
    let single = false;
    for (let p in map) {
        if (map[p] % 2 === 1) {
            result += map[p] - 1;
            single = true;
        } else if (map[p] % 2 === 0) {
            result += map[p];
        }
    }
    return result + (single ? 1 : 0);
};