/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let result = {
        max: 0,
        value: ''
    }
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
        } else {
            flag = false;
        }
    }
    if (j - i - 1 > result.max) {
        result.max = j - i - 1;
        result.value = s.slice(i+1, j)
    }
}
