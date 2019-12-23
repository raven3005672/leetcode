/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    if(n==2)
        return 1;
    if(n==3)
        return 2;
    var res=1;
    while(n>0){
        if(n==1)
            return res;
        if(n==2)
            return res*2;
        if(n==4)
            return res*4;
        res*=3;
        n-=3;
    }
    return res;
};