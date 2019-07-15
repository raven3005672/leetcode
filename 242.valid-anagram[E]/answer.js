/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    function str(xx) {
        return xx.split('').sort().join('');
    }
    return str(s) == str(t)
};