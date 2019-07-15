/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let dict = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
    result = s.split('')
    for (let i = 0, j = result.length - 1; i <= j;) {
        if (dict.indexOf(result[i]) > -1 && dict.indexOf(result[j]) > -1) {
            let temp = result[i];
            result[i] = result[j];
            result[j] = temp;
            i++;
            j--;
            continue;
        }
        if (dict.indexOf(result[i]) == -1) {
            i++;
        }
        if (dict.indexOf(result[j]) == -1) {
            j--;
        }
    }
    return result.join('')
};

