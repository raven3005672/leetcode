/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let magMap = {};
    for (let a of magazine) {
        if (magMap[a]) {
            magMap[a]++
        } else {
            magMap[a] = 1;
        }
    }
    for (let b of ransomNote) {
        if (magMap[b]) {
            magMap[b]--;
            if (magMap[b] < 0) return false;
        } else {
            return false;
        }
    }
    return true;
};