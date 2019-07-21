/**
 * @param {number} N
 * @return {number}
 */
var binaryGap = function(N) {
    let index = 0;
    let start = -1;
    let max = 0;
    while (N > 0) {
        let res = N & 1;
        if (res == 1) {
            if (start != -1) {
                max = Math.max(index - start, max);
            }
            start = index;
        } 
        index++;
        N >>= 1;
    }
    
    return (max > 0) ? max : 0;
};