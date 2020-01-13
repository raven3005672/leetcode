/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let arr = [];
    let strs = path.split('/');
    for (let i = 0; i < strs.length; i++) {
        if (strs[i] != '.' && strs[i] != '..' && strs[i] != '') {
            arr.push(strs[i]);
        }
        if (strs[i] == '..') {
            arr.pop();
        }
    }
    let result = arr.reduce((pre, cur) => {
        return pre + '/' + cur;
    }, '');
    return result ? result : '/';
};
