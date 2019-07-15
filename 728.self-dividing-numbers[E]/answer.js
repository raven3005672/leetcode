/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    var res = [];
    var str, num, flag;
    for(;left<=right;left++){
        flag = true
        str = String(left);
        for(var i=0;i<str.length;i++){
            num = Number(str[i]);
            if(num === 0 || left % num !== 0){
                flag = false;
                break;
            }
        }
        if(flag){
            res.push(left);
        }
    }
    return res;
};