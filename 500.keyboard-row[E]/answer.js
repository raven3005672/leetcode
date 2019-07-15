/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let regexp = /^([qwertyuiop]+|[asdfghjkl]+|[zxcvbnm]+)$/i;
    return words.filter(item => {
        return regexp.test(item);
    })
};