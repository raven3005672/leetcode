/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    //大神思路：记录当前数字个数，当当前数字与前一个数字不等，则上一个数字个数为last = cur，当last>=cur，res++，例如11110，记录一次，111100，记录两次，依次类推
    var last, cur, res;
    last = res = 0;
    cur = 1;
    for(var i=1;i<s.length;i++){
        if(s[i] === s[i-1]){
            cur++;
        }else{
            last = cur;
            cur = 1;
        }
        if(last >= cur){
            res++;
        }
    }
    return res;
};