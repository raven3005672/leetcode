/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    var count = 0;
    for(var i=0;i<s.length;i++){
        if(s[i] === 'A'){
            count++;
        }
    }
    if(count > 1) return false;
    if(s.indexOf('LLL') > -1) return false;
    return true;
};