/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map = {};
    let arr = s.split('');
    for (let k of s) {
        if (map[k]) {
            map[k]++;
        } else {
            map[k] = 1;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (map[arr[i]] == 1) {return i}
    }
    return -1;
};