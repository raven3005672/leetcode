/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    let sar = str.split(' ');
    if (sar.length !== pattern.length) {
        return false;
    }
    for (let i = 0; i < pattern.length; i++) {
        if (pattern.indexOf(pattern[i]) !== sar.indexOf(sar[i])) {
            return false
        }
    }
    return true;
};

// 如果一个数出现两次那它第一出线的位置肯定不变，所以用indexOf找到字符第一次出现的位置
