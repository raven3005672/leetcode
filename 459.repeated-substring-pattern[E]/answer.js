/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    let i = 2;
    let cell = '';
    let ss = '';
    while (i <= s.length) {
        if (s.length % i === 0) {
            cell = s.slice(0, s.length / i);
            ss = cell.repeat(i);
            if (ss == s) return true;
        }
        i++;
    }
    return false;
};

