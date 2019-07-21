/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
var numberOfLines = function(widths, S) {
    var width = 0;
    var n = 1;
    var str = 'abcdefghijklmnopqrstuvwxyz';
    for(var i=0;i<S.length;i++){
        var idx = str.indexOf(S[i]);
        if(widths[idx] + width > 100){
            n++;
            width = 0;
        }
        width += widths[idx];
    }
    return [n, width];
};