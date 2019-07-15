/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    let count = 0;
    let lastIsBlank = true;
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) == ' ') {
            lastIsBlank = true;
        } else {
            if (lastIsBlank) {
                count++;
            }
            lastIsBlank = false;
        }
    }
    return count;
};