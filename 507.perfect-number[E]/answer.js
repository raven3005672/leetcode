/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    if(num<=1)
        return false;
    var res=[1];
    for(var i=2;i<num;i++){
        if(i>num/i)
            break;
        if(num/i==parseInt(num/i)){
            res.push(i,num/i);
        }
    }
    if(res.reduce((a,b)=>a+b)==num)
        return true;
    return false;
};