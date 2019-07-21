/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function(A, B) {
    if(A.length !== B.length) return false;
    var str = A + A;
    return str.indexOf(B) > -1;
};