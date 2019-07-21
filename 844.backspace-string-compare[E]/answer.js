/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    let j = T.length - 1;
    for (let i = S.length - 1; i >= 0; i--) {
        if (T[j] == "#") {
            j = backSpace(T, j);
        } 
        if (S[i] == "#") {
            i = backSpace(S, i);
        }
        
        if (T[j] == S[i]) {
            j--;
        } else {
            return false;
        }
    }
    function backSpace(S, i) {
        let step = 0;
        while (S[i] == "#" || step > 0) {
            if (S[i] == "#") {
                step++;
            } else {
                step--;
            }
            i--;
        }
        return i;
    }
    
    return true;
};