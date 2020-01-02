/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let result = {
        value: 0
    };
    for (let i = 0; i < s.length; i++) {
        check(s, i, i, result);
        check(s, i, i + 1, result);
    }
    return result.value;
};

function check(s, i, j, result) {
    let flag = true;
    while(i >= 0 && j <= s.length - 1 && flag ) {
        if (s[i] === s[j]) {
            i--;
            j++;
            result.value++;
        } else {
            flag = false;
        }
    }
}
