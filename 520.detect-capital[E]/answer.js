/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    let res1 = word == word.toUpperCase();
    let res2 = word == word.toLowerCase();
    let temp = word.slice(1);
    let res3 = temp == temp.toLowerCase();
    return res1 || res2 || res3;
};