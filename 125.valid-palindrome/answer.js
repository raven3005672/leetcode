/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let temp = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    return temp == temp.split('').reverse().join('');
};
