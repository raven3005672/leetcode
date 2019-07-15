/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let res = s.split(' ');
    let a = res.map((item, i) => {
        return item.split('').reverse().join('');
    })
    return a.join(' ')
};